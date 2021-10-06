import React from 'react'
import {CustomIcon} from "../.."
import {alertsData} from "../../../data"


const OrderOverflowAlert = () => {
    return <>
        <div style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "4em"
        }}>
            <CustomIcon medium>warning</CustomIcon>
        </div>
        <p className="amber lighten-2 z-depth-5" style={{
            textAlign: "center", margin: 25
        }}>{alertsData.orderIsFull}</p>
    </>
}

export default OrderOverflowAlert
