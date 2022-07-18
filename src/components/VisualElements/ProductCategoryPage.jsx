import { GridView } from "../index"
import React from "react"
import { useTranslation } from "react-i18next"
import { Helmet } from 'react-helmet-async'

const ProductCategoryPage = ({ category }) => {
    const { t } = useTranslation()
    const subCategoriesName = category.subcategories.map(subCategory=>subCategory.name)
    return <>
        <Helmet>
            <title>{category.name}</title>
            <meta
                name="description"
                content={subCategoriesName}
            />
            <meta property="og:image" content={category.imageUrl} />
        </Helmet>
        <h3 style={{ textAlign: "center" }}>{t(category.name)}</h3>
        <GridView cardItems={category.subcategories} />
    </>
}

export default ProductCategoryPage
