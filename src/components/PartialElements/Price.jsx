import React from 'react'

const Price = ({remains}) => {
    const noPrice = "Нет цены"
    return <>
        {remains ? remains[0] ? <div
            className="pink-text accent-4"
        >{remains[0].price ? `${remains[0].price} грн` : noPrice}</div> : <></>:noPrice}
    </>
}

export default Price
