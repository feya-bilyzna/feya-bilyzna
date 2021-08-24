import React from 'react'
import {categoriesData} from '../../data'
import {GridView} from "../index";
import {CardPanel} from "react-materialize";

const MainPage = () => {
    return (
        <div>
            <div>
                <CardPanel style={{height: "60px", paddingBottom: "0%", paddingTop: "0%"}}>
                    <h3 style={{"textAlign": "center"}}>Группы товаров</h3>
                </CardPanel>
                <GridView cardItems={[
                    ...Object.values(categoriesData.categories),
                    ...Object.values(categoriesData.uncategorizedSubcategories),
                ]}/>
            </div>
        </div>
    )
}

export default MainPage
