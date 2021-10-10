import React from 'react'
import {Row} from "react-materialize"
import {CartExitButton} from '.'
import {alertsData} from "../../../data"

const EmptyCart = ({children}) => {
    return <div style={{textAlign: "center"}}>
        <h5>{alertsData.cartIsEmpty}</h5>
        <Row style={{paddingTop: 10}}>
            <CartExitButton />
        </Row>
        {children}
    </div>
}

export default EmptyCart
