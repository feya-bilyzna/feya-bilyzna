import React from 'react'
import {categoriesData} from '../../data'
import {GridView} from "../index";

const MainPage = () => {
    return (
        <div>
            <div>
                <h1 style={{"fontSize": "calc(24px + 16 * (120vw / 1280))", "textAlign": "center"}}>Группы товаров:</h1>
                {/*<CategoryGridView CategoryList={imageListCategories}/>*/}
                <GridView cardItems={[
                    ...Object.values(categoriesData.categories),
                    ...Object.values(categoriesData.uncategorizedSubcategories),
                ]}/>
            </div>
        </div>
    )
}

export default MainPage
