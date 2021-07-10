import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {ProductGridView} from "../../../components";

const Bikini = () => {
    const MyQuery = gql`
    query MyQuery {
             categoryProducts(categoryName: "Трусики Бикини") {
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
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Бикини</h1>
            <ProductGridView products={data.categoryProducts}/>
        </div>
    );
};
export default Bikini;
