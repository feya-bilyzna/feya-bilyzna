import React from 'react';
import {imageListCategories, CategoryGridView} from "../../components"

const MainPage = () => {
    return (
        <div>
            <div>
                <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Группы товаров:</h1>
                <CategoryGridView CategoryList={imageListCategories}/>
            </div>
        </div>
    )
}

export default MainPage
