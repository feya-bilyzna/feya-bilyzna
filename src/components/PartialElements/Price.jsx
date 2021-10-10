import React from 'react'

const Price = ({remains}) => {
    return <>
        {remains ? <div
            className="pink-text accent-4"
        >{remains[0].price ? `${remains[0].price} грн` : "Нет цены"}</div> : <></>}
    </>
}

export default Price
