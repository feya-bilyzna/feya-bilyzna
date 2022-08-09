import React from 'react'
import { Button } from "react-materialize"


const ChangeAmountButton = ({ disabled, onClickFunc, children }) => {
    return <Button
        flat
        node="button"
        className="red lighten-2"
        waves="light"
        onClick={onClickFunc}
        disabled={disabled}
        small
        floating
        style={{
            width: 18,
            height: 18,
            lineHeight: "18px",
            color: "white",
            margin: 5,
        }}>{children}</Button>
}

export default ChangeAmountButton
