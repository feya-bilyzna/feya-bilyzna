import { gql, useQuery } from "@apollo/client";
import { GridView } from "../index";
import React, { useEffect, useState } from "react";
import { LoadingAnimation } from '..'
import { alertsData } from "../../data"


const ProductSubcategoryPage = ({ subcategory }) => {
    const ProductsQuery = gql`
        query ProductsQuery($categoryName: String!, $page: Int!) {
             categoryProducts(categoryName: $categoryName, page: $page) {
                description
                id
                name
                images {
                  url           
                }
            }
        }
    `

    const { loading, error, data, fetchMore } = useQuery(ProductsQuery, {
        variables: { categoryName: subcategory.name, page: 1 },
    })
    const [additionalLoading, setAdditionalLoading] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight &&
                !additionalLoading
            ) {
                setAdditionalLoading(true)
                fetchMore({
                    variables: {
                        page: data?.categoryProducts?.length ?
                            Math.ceil(data.categoryProducts.length / 12) + 1 : 1
                    },
                }).finally(
                    (result) => { setAdditionalLoading(false) }
                )
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    const pageHeader = <h3 style={{ "textAlign": "center" }}>{subcategory.name}</h3>

    if (loading) return <>{pageHeader}<LoadingAnimation style={{ height: "50vh" }} /></>
    if (error) return <h5 style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>

    return (
        <div>
            <h3 style={{ "textAlign": "center" }}>{subcategory.name}</h3>
            {data.categoryProducts?.length ?
                <GridView apiPatterns cardItems={data.categoryProducts} route={subcategory.route} /> :
                <h6 style={{ "textAlign": "center" }}>{alertsData.missingProducts}</h6>
            }
            {additionalLoading ? <LoadingAnimation style={{ marginBottom: 30 }} /> : <></>}
        </div>
    )
}

export default ProductSubcategoryPage
