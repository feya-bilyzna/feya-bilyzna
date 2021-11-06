import React from 'react'

const Price = ({ item }) => {
    const noPrice = "Нет цены"

    const remains = item.remains ? item.remains : []

    let [minPrice, maxPrice] = [Infinity, -Infinity]
    for (let remain of remains) {
        if (remain.price < minPrice) minPrice = remain.price
        if (remain.price > maxPrice) maxPrice = remain.price
    }
    const displayedPrice = !remains.length ? noPrice :
        minPrice === maxPrice ? `${minPrice} грн` : `от ${minPrice} до ${maxPrice} грн`

    return <>
        <div className="pink-text accent-4">
            {displayedPrice}
        </div>
    </>
}

export default Price
