import React from 'react'

const Price = ({ item }) => {
    const noPrice = "Нет цены"
    return <>
        {item.remains ?
            item.remains[0] ?
                <div className="pink-text accent-4">
                    {item.remains[0].price ?
                        `${item.remains[0].price} грн` :
                        noPrice}</div> :
                noPrice
            : <></>}
    </>
}

export default Price
