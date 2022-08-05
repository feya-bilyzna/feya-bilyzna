import { GridView, MetaTags } from "../"
import React from "react"
import { useTranslation } from "react-i18next"
import { metaTagsData } from './../../data'

const ProductCategoryPage = ({ category }) => {
    const { t } = useTranslation()
    return <>
        <MetaTags {...metaTagsData[category.route.substring(1)]}/>
        <h3 style={{ textAlign: "center" }}>{t(category.name)}</h3>
        <GridView cardItems={category.subcategories} />
    </>
}

export default ProductCategoryPage
