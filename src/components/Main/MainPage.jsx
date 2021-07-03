import React from 'react';
import { ProductList } from "../Product-Views/ProductList";
import GridTest from "./Test/GridTest";

export const MainPage = () => {

    return(
        <div>
            <div >
                <h1>Группы товаров:</h1>
                <GridTest/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductList />
            </div>
        </div>
    )
}
