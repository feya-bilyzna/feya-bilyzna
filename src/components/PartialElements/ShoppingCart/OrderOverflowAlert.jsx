import React from 'react'
import {CustomIcon} from "../.."
import {alertsData} from "../../../data"
import { useTranslation } from "react-i18next"

const OrderOverflowAlert = () => {
    const { t } = useTranslation()
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
        }}>{t(alertsData.orderIsFull)}</p>
    </>
}

export default OrderOverflowAlert
