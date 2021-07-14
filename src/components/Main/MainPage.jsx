import React from 'react'
import {categoriesData} from '../../data'
import {GridView} from "../index";

const MainPage = () => {
    return (
        <div>
            <div>
                <h1 style={{"textAlign": "center"}}>Группы товаров:</h1>
                <GridView cardItems={[
                    ...Object.values(categoriesData.categories),
                    ...Object.values(categoriesData.uncategorizedSubcategories),
                ]}/>
            </div>
        </div>
    )
}

export default MainPage
