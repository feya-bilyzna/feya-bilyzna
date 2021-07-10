import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {ProductGridView} from "../../../components";

const Foam = () => {
    const MyQuery = gql`
    query MyQuery {
             categoryProducts(categoryName: "Бюстгальтеры с паралоном") {
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
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>С паралоном</h1>
            <ProductGridView products={data.categoryProducts}/>
        </div>
    );
};

export default Foam;


/*
* import React from 'react';
import {gql, useQuery} from "@apollo/client";
import ProductGridView from "../VisualElements/ProductGridView";

export const KnickersPage = () => {
    const MyQuery = gql`
    query MyQuery {
             categoryProducts(categoryName: "Трусики") {
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
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Трусики</h1>
            <ProductGridView products={data.categoryProducts}/>
        </div>
    );
};

* */