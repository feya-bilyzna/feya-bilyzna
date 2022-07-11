import React from 'react'
import { categoriesData } from '../../data'
import { GridView, Slider } from "../index"
import { useTranslation } from "react-i18next"

const MainPage = () => {
    const { t } = useTranslation()
    return <>
        <Slider />
        <h3 style={{ "textAlign": "center", margin: 30 }}>{t("Группы товаров")}</h3>
        <GridView cardItems={[
            ...Object.values(categoriesData.categories),
            ...Object.values(categoriesData.uncategorizedSubcategories),
        ]} />
    </>
}

export default MainPage
