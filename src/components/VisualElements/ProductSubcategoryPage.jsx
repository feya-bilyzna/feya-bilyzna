import { gql, useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Collapsible, CollapsibleItem, Icon, Row } from "react-materialize"
import { LoadingAnimation, GridView, ProductOptionSelect } from '..'
import { alertsData } from "../../data"
import { filterSortData } from "../../data"
import styles from "../../css.module/FilterSort.module.css"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"

const ProductSubcategoryPage = ({ subcategory, parentFilters }) => {
    const { t } = useTranslation()
    const ProductsQuery = gql`
        query ProductsQuery($categoryName: [String]!, $page: Int!, $variantStyles: GenericScalar, $orderBy: ProductOrderBy) {
            categoryProducts(categoryName: $categoryName, page: $page, variantStyles: $variantStyles, orderBy: $orderBy) {
                id
                images
                brandName
                categories
                vendorCode
                remains {
                    price,
                    remains
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
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 &&
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

    const pageHeader = <h3 style={{ textAlign: "center" }}>{t(subcategory.name)}</h3>

    if (loading) return <>{pageHeader}<LoadingAnimation style={{ height: "50vh" }} /></>
    if (error) return <h5 style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>

    const updateFilters = (filterName, filterValue) => {
        const newFilters = { ...filters, [filterName]: filterValue || undefined }
        setFilters(newFilters)
        refetch({ variantStyles: newFilters })
    }
    const pageDescription = `Товары категории: ${subcategory.name}`

    return <>
        <Helmet>
            <title>{subcategory.name}</title>
            <meta
                name="description"
                content={pageDescription}
            />
        </Helmet>
        {pageHeader}
        <Collapsible className={styles.paddingTop} style={{ margin: "0 3px 0 3px" }} accordion>
            <CollapsibleItem
                className={"flow-text"}
                expanded={false}
                header={t("Фильтрация и сортировка")}
                icon={<Icon>keyboard_arrow_down</Icon>}
            >
                <Row style={{ marginBottom: 0 }}>
                    <ProductOptionSelect
                        options={filterSortData.sorters.price}
                        label={t(filterSortData.sorters.priceLabel)}
                        onChange={(event) => {
                            setOrderBy(event.target.value || undefined)
                            refetch({ orderBy: event.target.value || undefined })
                        }} />
                    <ProductOptionSelect
                        filter
                        options={filterSortData.filters.colors}
                        label={t(filterSortData.filters.colorsLabel)}
                        onChange={(event) => updateFilters("color", event.target.value)}
                    />
                    {
                        (parentFilters || []).includes("cupSize") ?
                            <ProductOptionSelect
                                filter
                                options={filterSortData.filters.cupSizes}
                                label={t(filterSortData.filters.cupSizesLabel)}
                                onChange={(event) => updateFilters("cupSize", event.target.value)}
                            />
                            : <></>
                    }
                    {
                        (parentFilters || []).includes("bandSize") ?
                            <ProductOptionSelect
                                filter
                                options={filterSortData.filters.bandSizes}
                                label={t(filterSortData.filters.bandSizesLabel)}
                                onChange={(event) => updateFilters("bandSize", event.target.value)} />
                            : <></>
                    }
                    {
                        (parentFilters || []).includes("size") ?
                            <ProductOptionSelect
                                options={filterSortData.filters.knickersSizes}
                                label={t(filterSortData.filters.knickersSizesLabel)}
                                onChange={(event) => updateFilters("size", event.target.value)}
                            /> : <></>
                    }
                </Row>
            </CollapsibleItem>
        </Collapsible>
        {data.categoryProducts?.length ?
            <GridView isSubcategory cardItems={data.categoryProducts} route={subcategory.route} /> :
            <h6 style={{ textAlign: "center" }}>{t(alertsData.missingProducts)}</h6>
        }
        <LoadingAnimation empty={!additionalLoading} style={{ marginBottom: 30 }} />
    </>
}

export default ProductSubcategoryPage
