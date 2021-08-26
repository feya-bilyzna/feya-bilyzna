import React from 'react'
import {categoriesData} from '../../data'
import {GridView} from "../index"

const MainPage = () => {
    return <>
        <h3 style={{"textAlign": "center"}}>Группы товаров</h3>
        <GridView cardItems={[
            ...Object.values(categoriesData.categories),
            ...Object.values(categoriesData.uncategorizedSubcategories),
        ]}/>
    </>
}

export default MainPage
