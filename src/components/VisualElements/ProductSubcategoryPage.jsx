import { gql, useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Collapsible, CollapsibleItem, Icon, Row } from "react-materialize"
import { LoadingAnimation, GridView, Sort, ProductFilter } from '..'
import { alertsData } from "../../data"
import { filterSortData, categoriesData } from "../../data"
import styles from "../../css.module/colorFilter.module.css"

//color: "black" ,cupSize: "A", bandSize: "70"
//variantStyles: {}, 
//orderBy: CHEAPEST
//orderBy: EXPENSIVE

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
    const [priceSorter, setPriceSorter] = useState()
    const [colorFilter, setColorFilter] = useState()

    const [knickersFilter, setKnickersFilter] = useState()

    const [cupleFilter, setCupleFilter] = useState()
    const [bandSizeFilter, setBandSizeFilter] = useState()

    let variantStylesSelects = {}

    

    if (subcategory.route.indexOf("bras") > 0) {
        if (colorFilter && cupleFilter && bandSizeFilter) {
            console.log("выбраны цвет, чашка и обхват")
            variantStylesSelects = { color: colorFilter, cupSize: cupleFilter, bandSize: bandSizeFilter }
        }
        else if (colorFilter && cupleFilter && !bandSizeFilter) {
            console.log("выбраны цвет и чашка")
            variantStylesSelects = { color: colorFilter, cupSize: cupleFilter }
        }
        else if (colorFilter && !cupleFilter && bandSizeFilter) {
            console.log("выбраны цвет и обхват")
            variantStylesSelects = { color: colorFilter, bandSize: bandSizeFilter }
        }
        else if (!colorFilter && cupleFilter && bandSizeFilter) {
            console.log("выбраны чашка и обхват")
            variantStylesSelects = { cupSize: cupleFilter, bandSize: bandSizeFilter }
        }
        else if (!colorFilter && !cupleFilter && bandSizeFilter) {
            console.log("выбраны обхват")
            variantStylesSelects = { bandSize: bandSizeFilter }
        }
        else if (!colorFilter && cupleFilter && !bandSizeFilter) {
            console.log("выбраны чашка")
            variantStylesSelects = { cupSize: cupleFilter }
        }
        else if (colorFilter && !cupleFilter && !bandSizeFilter) {
            console.log("выбраны цвет")
            variantStylesSelects = { color: colorFilter }
        }
        else if (!colorFilter && !cupleFilter && !bandSizeFilter) {
            console.log("Ничего не выбрано выбрано")
            variantStylesSelects = {}
        }
    }
    else {
        if (!colorFilter && !knickersFilter) {
            console.log("Ничего не выбрано выбрано")
            variantStylesSelects = {}
        }
        else if (!colorFilter && knickersFilter) {
            console.log("Выбраны размер трусов")
            variantStylesSelects = { size: knickersFilter }
        }
        else if (colorFilter && knickersFilter) {
            console.log("Выбраны размер трусов и цвет")
            variantStylesSelects = { color: colorFilter, size: knickersFilter }
        }
        else if (colorFilter && !knickersFilter) {
            console.log("Выбран цвет")
            variantStylesSelects = { color: colorFilter }
        }
    }

    console.log(variantStylesSelects)

    const queryVariables = {
        categoryName: subcategory.name,
        page: 1,
        variantStyles: variantStylesSelects,
        orderBy: priceSorter || undefined
    }

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
                <Row>
                    <Sort
                        options={filterSortData.sorters.price}
                        label={filterSortData.sorters.priceLabel}
                        onChange={(event) => {
                            setPriceSorter(event.target.value)
                            refetch(
                                { ...queryVariables, orderBy: event.target.value || undefined }
                            )
                        }} />
                    <ProductFilter
                        filterOptions={filterSortData.filters.colors}
                        label={filterSortData.filters.colorsLabel}
                        onChange={(event) => {
                            setColorFilter(event.target.value)
                            refetch(
                                { ...queryVariables, variantStyles: { color: event.target.value, ...queryVariables.variantStyles } || undefined }
                            )
                        }}
                    />
                    {
                        subcategory.route.indexOf("bras") > 0 ?
                            <>
                                <ProductFilter
                                    filterOptions={filterSortData.filters.cupSizes}
                                    label={filterSortData.filters.cupSizesLabel}
                                    onChange={(event) => {
                                        setCupleFilter(event.target.value)
                                        refetch(
                                            { ...queryVariables, variantStyles: { cupSize: event.target.value, ...queryVariables.variantStyles } || undefined }
                                        )
                                    }}
                                />
                                <ProductFilter
                                    filterOptions={filterSortData.filters.bandSizes}
                                    label={filterSortData.filters.bandSizesLabel}
                                    onChange={(event) => {
                                        setBandSizeFilter(event.target.value)
                                        refetch(
                                            { ...queryVariables, variantStyles: { bandSize: event.target.value, ...queryVariables.variantStyles } || undefined }
                                        )
                                    }}
                                />
                            </> : <></>
                    }
                    {
                        subcategory.route.indexOf("knickers") > 0 ?
                            <ProductFilter
                                filterOptions={filterSortData.filters.knickersSizes}
                                label={filterSortData.filters.knickersSizesLabel}
                                onChange={(event) => {
                                    setKnickersFilter(event.target.value)
                                    refetch(
                                        { ...queryVariables, variantStyles: { size: event.target.value, ...queryVariables.variantStyles } || undefined }
                                    )
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
