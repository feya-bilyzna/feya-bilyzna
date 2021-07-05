import React from 'react';
import {ProductList, GridView} from "../../components";

const MainPage = () => {

    return (
        <div>
            <div>
                <h1>Группы товаров:</h1>
                <GridView/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductList/>
            </div>
        </div>
    )
}

export default MainPage
