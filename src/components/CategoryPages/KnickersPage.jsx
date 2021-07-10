import React from 'react';
import {imageListSubcategoriesKnickers, CategoryGridView} from "../../components";

const KnickersPage = () => {
    return (
        <div>
            <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Трусики</h1>
            <CategoryGridView CategoryList={imageListSubcategoriesKnickers}/>
        </div>
    );
};

export default KnickersPage
