import {gql, useQuery} from "@apollo/client";
import {GridView} from "../index";
import React from "react";

const ProductSubcategoryPage = ({subcategory}) => {
    const ProductsQuery = gql`
        query ProductsQuery($categoryName: String!) {
             categoryProducts(categoryName: $categoryName) {
                description
                id
                name
                images {
                  url           
                }
            }
        }
    `
    const {loading, error, data} = useQuery(ProductsQuery, {
        variables: {categoryName: subcategory.name},
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <div>
            <h3 style={{"textAlign": "center"}}>{subcategory.name}</h3>
    <h4>Test</h4>
            <GridView apiPatterns cardItems={data.categoryProducts} route = {subcategory.route}/>
        </div>
    )
}

export default ProductSubcategoryPage
