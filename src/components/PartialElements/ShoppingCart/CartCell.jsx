import React from 'react'
import { Col } from "react-materialize"

const CartCell = ({ size, children, bold }) => {
    return <Col s={size} m={size} l={size} xl={size} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: bold ? "bold" : "normal",
        fontSize: "min(2.5vw, 14px)",
    }}>{children}</Col>
}

export default CartCell
