import React from 'react'
import { Button } from "react-materialize"
import { CustomIcon } from ".."
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ExitButton = ({ style }) => {
    const { t } = useTranslation()
    return <NavLink to={'/'} style={style}>
        <Button
            className="pink accent-4"
            node="button" waves="red"
            style={{
                color: 'white',
                overflow: "hidden",
                fontSize: "min(2.5vw, 14px)",
            }}
        >
            <CustomIcon left>arrow_back</CustomIcon>
            {t("К покупкам")}
        </Button>
    </NavLink>
}

export default ExitButton
