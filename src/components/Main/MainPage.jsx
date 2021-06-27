import React from 'react';
import { ProductList } from "../Product-Views/ProductList";

export const MainPage = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ProductList />
        </div>
    )
}
