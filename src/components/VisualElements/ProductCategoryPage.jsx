import {GridView} from "../index";
import React from "react";

const ProductCategoryPage = ({category}) => {
    return (
        <div>
            <h3 style={{textAlign: "center"}}>{category.name}</h3>
            <GridView cardItems={category.subcategories}/>
        </div>
    )
}
export default ProductCategoryPage