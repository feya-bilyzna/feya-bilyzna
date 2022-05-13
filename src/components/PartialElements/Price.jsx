import React from 'react'
import { useTranslation } from "react-i18next"

const Price = ({ item }) => {
    const { t } = useTranslation()
    const noPrice = t("Нет цены")

    const remains = item.remains ? item.remains : []

    let [minPrice, maxPrice] = [Infinity, -Infinity]
    for (let remain of remains) {
        if (remain.price < minPrice) minPrice = remain.price
        if (remain.price > maxPrice) maxPrice = remain.price
    }
    const displayedPrice = !remains.length ? noPrice :
        minPrice === maxPrice ? `${minPrice} ${t("грн")}` : `${t("от")} ${minPrice} ${t("до")} ${maxPrice} ${t("грн")}`

    return <>
        <div className="pink-text accent-4">
            {displayedPrice}
        </div>
    </>
}

export default Price
