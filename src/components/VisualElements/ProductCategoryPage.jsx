import {GridView} from "../index"
import React from "react"
import { useTranslation } from "react-i18next"

const ProductCategoryPage = ({category}) => {
    const { t } = useTranslation()
    return <>
        <h3 style={{textAlign: "center"}}>{t(category.name)}</h3>
        <GridView cardItems={category.subcategories}/>
    </>
}

export default ProductCategoryPage
