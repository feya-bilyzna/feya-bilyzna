import React from 'react';
import { ProductList } from "../Product-Views/ProductList";
import GridView from "./VisualElements/GridView";


export const MainPage = () => {

    return(
        <div>
            <div >
                <h1>Группы товаров:</h1>
                <GridView/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductList />
            </div>
        </div>
    )
}
