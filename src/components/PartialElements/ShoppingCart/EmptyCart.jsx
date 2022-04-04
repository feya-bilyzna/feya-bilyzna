import React from 'react'
import {Row} from "react-materialize"
import {alertsData} from "../../../data"
import { useTranslation } from "react-i18next"
import { ExitButton } from '../..'

const EmptyCart = ({children}) => {
    const { t } = useTranslation()
    return <div style={{textAlign: "center"}}>
        <h5>{t(alertsData.cartIsEmpty)}</h5>
        <Row style={{paddingTop: 10}}>
            <ExitButton />
        </Row>
        {children}
    </div>
}

export default EmptyCart
