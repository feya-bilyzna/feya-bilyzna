import { GridView, MetaTags } from "../"
import React from "react"
import { useTranslation } from "react-i18next"
import { metaTagsData } from './../../data'

const ProductCategoryPage = ({ categoryKey, categoryValue }) => {
    const { t } = useTranslation()
    return <>
        <MetaTags {...metaTagsData[categoryKey]}/>
        <h3 style={{ textAlign: "center" }}>{t(categoryValue.name)}</h3>
        <GridView cardItems={categoryValue.subcategories} />
    </>
}

export default ProductCategoryPage
