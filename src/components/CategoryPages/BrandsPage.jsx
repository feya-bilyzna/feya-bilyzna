import React from 'react';
import {imageListSubcategoriesBrands, CategoryGridView} from "../../components";

const BrandsPage = () => {
    return (
        <div>
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Бренды</h1>
            <CategoryGridView CategoryList={imageListSubcategoriesBrands}/>
        </div>
    );
};

export default BrandsPage
