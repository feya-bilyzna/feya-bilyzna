import {GridView} from "../index";
import React from "react";
import {CardPanel} from "react-materialize";

const ProductCategoryPage = ({category}) => {
    return (
        <div>
            <CardPanel style={{height: "60px", paddingBottom: "0%", paddingTop: "0%"}}>
                <h3 style={{textAlign: "center"}}>{category.name}</h3>
            </CardPanel>
            <GridView cardItems={category.subcategories}/>
        </div>
    )
}
export default ProductCategoryPage
