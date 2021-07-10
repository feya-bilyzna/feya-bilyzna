import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {ProductGridView} from "../../../components";

const Brazilian = () => {
    const MyQuery = gql`
    query MyQuery {
             categoryProducts(categoryName: "Труисик Бразильяны") {
                description
                id
                images {
                  url           
                }
            }
    }
`
    const {loading, error, data} = useQuery(MyQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <div>
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Бразильяны</h1>
            <ProductGridView products={data.categoryProducts}/>
        </div>
    );
};

export default Brazilian;
