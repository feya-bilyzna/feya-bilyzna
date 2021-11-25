import { gql, useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Collapsible, CollapsibleItem, Icon, Row } from "react-materialize"
import { LoadingAnimation, GridView, ProductOptionSelect } from '..'
import { alertsData } from "../../data"
import { filterSortData } from "../../data"
import styles from "../../css.module/FilterSort.module.css"

const ProductSubcategoryPage = ({ subcategory, parentFilters }) => {
    const ProductsQuery = gql`
        query ProductsQuery($categoryName: [String]!, $page: Int!, $variantStyles: GenericScalar, $orderBy: ProductOrderBy) {
             categoryProducts(categoryName: $categoryName, page: $page, variantStyles: $variantStyles, orderBy: $orderBy) {
                id
                images {
                  url
                }
                brandName
                vendorCode
                remains {
                    price
               }
             }
        }
    `

    const [filters, setFilters] = useState({})
    const [orderBy, setOrderBy] = useState(undefined)

    const { loading, error, data, fetchMore, refetch } = useQuery(ProductsQuery, {
        variables: {
            categoryName: subcategory.name,
            page: 1,
            variantStyles: filters,
            orderBy: orderBy,
        },
    })
    const [additionalLoading, setAdditionalLoading] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (
                data?.categoryProducts &&
                window.innerHeight + window.scrollY >= document.body.offsetHeight &&
                !additionalLoading
            ) {
                setAdditionalLoading(true)
                fetchMore({
                    variables: {
                        page: data.categoryProducts?.length ?
                            Math.ceil(data.categoryProducts.length / 12) + 1 : 1
                    },
                }).finally(
                    (result) => {
                        setAdditionalLoading(false)
                    }
                )
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    const pageHeader = <h3 style={{ textAlign: "center" }}>{subcategory.name}</h3>

    if (loading) return <>{pageHeader}<LoadingAnimation style={{ height: "50vh" }} /></>
    if (error) return <h5 style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>

    const updateFilters = (filterName, filterValue) => {
        const newFilters = { ...filters, [filterName]: filterValue || undefined }
        setFilters(newFilters)
        refetch({ variantStyles: newFilters })
    }

    return <>
        {pageHeader}
        <Collapsible className={styles.paddingTop} style={{ margin: "0 3px 0 3px" }} accordion>
            <CollapsibleItem
                className={"flow-text"}
                expanded={false}
                header="Фильтрация и сортировка"
                icon={<Icon>keyboard_arrow_down</Icon>}
            >
                <Row style={{ marginBottom: 0 }}>
                    <ProductOptionSelect
                        options={filterSortData.sorters.price}
                        label={filterSortData.sorters.priceLabel}
                        onChange={(event) => {
                            setOrderBy(event.target.value || undefined)
                            refetch({ orderBy: event.target.value || undefined })
                        }} />
                    <ProductOptionSelect
                        filter
                        options={filterSortData.filters.colors}
                        label={filterSortData.filters.colorsLabel}
                        onChange={(event) => updateFilters("color", event.target.value)}
                    />
                    {
                        (parentFilters || []).includes("cupSize") ?
                            <ProductOptionSelect
                                filter
                                options={filterSortData.filters.cupSizes}
                                label={filterSortData.filters.cupSizesLabel}
                                onChange={(event) => updateFilters("cupSize", event.target.value)}
                            />
                            : <></>
                    }
                    {
                        (parentFilters || []).includes("bandSize") ?
                            <ProductOptionSelect
                                filter
                                options={filterSortData.filters.bandSizes}
                                label={filterSortData.filters.bandSizesLabel}
                                onChange={(event) => updateFilters("bandSize", event.target.value)} />
                            : <></>
                    }
                    {
                        (parentFilters || []).includes("size") ?
                            <ProductOptionSelect
                                options={filterSortData.filters.knickersSizes}
                                label={filterSortData.filters.knickersSizesLabel}
                                onChange={(event) => updateFilters("size", event.target.value)}
                            /> : <></>
                    }
                </Row>
            </CollapsibleItem>
        </Collapsible>
        {data.categoryProducts?.length ?
            <GridView isSubcategory cardItems={data.categoryProducts} route={subcategory.route} /> :
            <h6 style={{ textAlign: "center" }}>{alertsData.missingProducts}</h6>
        }
        <LoadingAnimation empty={!additionalLoading} style={{ marginBottom: 30 }} />
    </>
}

export default ProductSubcategoryPage
