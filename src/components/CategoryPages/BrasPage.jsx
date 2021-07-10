import React from 'react';
import {imageListSubcategoriesBra, CategoryGridView} from "../../components";

const BrasPage = () => {
    return (
        <div>
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Бюстгальтеры</h1>
            <CategoryGridView CategoryList={imageListSubcategoriesBra}/>
        </div>
    );
};

export default BrasPage
