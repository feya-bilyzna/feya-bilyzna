import React from 'react'
import {Row} from "react-materialize"
import {CartExitButton} from '.'
import {alertsData} from "../../../data"
import { useTranslation } from "react-i18next"

const EmptyCart = ({children}) => {
    const { t } = useTranslation()
    return <div style={{textAlign: "center"}}>
        <h5>{t(alertsData.cartIsEmpty)}</h5>
        <Row style={{paddingTop: 10}}>
            <CartExitButton />
        </Row>
        {children}
    </div>
}

export default EmptyCart
