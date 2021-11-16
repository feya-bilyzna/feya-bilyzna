import { gql, useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Collapsible, CollapsibleItem, Icon, Row } from "react-materialize"
import { LoadingAnimation, GridView, SelectorSpecificProducts } from '..'
import { alertsData } from "../../data"
import { filterSortData } from "../../data"
import styles from "../../css.module/FilterSort.module.css"

const ProductSubcategoryPage = ({ subcategory, filters }) => {
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

    const [queryVariables, setQueryVariables] = useState({
        categoryName: subcategory.name,
        page: 1,
        variantStyles: {
            color: undefined,
            cupSize: undefined,
            bandSize: undefined,
            size: undefined
        },
        orderBy: undefined
    })

    const { loading, error, data, fetchMore, refetch } = useQuery(ProductsQuery, {
        variables: queryVariables,
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

    return <>
        {pageHeader}
        <Collapsible style={{ margin: "0 3px 0 3px" }} accordion>
            <CollapsibleItem
                className={"flow-text"}
                expanded={false}
                header="Фильтрация и сортировка"
                icon={<Icon>keyboard_arrow_down</Icon>}
                node="div"
            >
                <Row style={{ marginBottom: 0 }}>
                    <SelectorSpecificProducts
                        options={filterSortData.sorters.price}
                        label={filterSortData.sorters.priceLabel}
                        onChange={(event) => {
                            const newFilters = { ...queryVariables, orderBy: event.target.value || undefined }
                            console.log(newFilters)
                            setQueryVariables(newFilters)
                            refetch(newFilters)
                        }} />
                    <SelectorSpecificProducts
                        filter
                        options={filterSortData.filters.colors}
                        label={filterSortData.filters.colorsLabel}
                        onChange={(event) => {
                            const newFilters = { ...queryVariables, variantStyles: { ...queryVariables.variantStyles, color: event.target.value || undefined } }
                            setQueryVariables(newFilters)
                            refetch(newFilters)
                        }}
                    />
                    {
                        (filters || []).includes("cupSize") ?
                            <SelectorSpecificProducts
                                filter
                                options={filterSortData.filters.cupSizes}
                                label={filterSortData.filters.cupSizesLabel}
                                onChange={(event) => {
                                    const newFilters = { ...queryVariables, variantStyles: { ...queryVariables.variantStyles, cupSize: event.target.value || undefined } }
                                    setQueryVariables(newFilters)
                                    refetch(newFilters)
                                }}
                            />
                            : <></>
                    }
                    {
                        (filters || []).includes("bandSize") ?
                            <SelectorSpecificProducts
                                filter
                                options={filterSortData.filters.bandSizes}
                                label={filterSortData.filters.bandSizesLabel}
                                onChange={(event) => {
                                    const newFilters = { ...queryVariables, variantStyles: { ...queryVariables.variantStyles, bandSize: event.target.value || undefined } }
                                    setQueryVariables(newFilters)
                                    refetch(newFilters)
                                }} />
                            : <></>
                    }
                    {
                        (filters || []).includes("size") ?
                            <SelectorSpecificProducts
                                options={filterSortData.filters.knickersSizes}
                                label={filterSortData.filters.knickersSizesLabel}
                                onChange={(event) => {
                                    const newFilters = { ...queryVariables, variantStyles: { ...queryVariables.variantStyles, size: event.target.value || undefined } }
                                    setQueryVariables(newFilters)
                                    refetch(newFilters)
                                }}
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
