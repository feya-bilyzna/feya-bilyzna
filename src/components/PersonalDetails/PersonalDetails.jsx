import React from 'react'
import {useCookies} from "react-cookie"
import { Button, Table } from 'react-materialize'
import {NavLink} from "react-router-dom"
import { useTranslation } from "react-i18next"

const PersonalDetails = () => {
    const { t } = useTranslation()
    const [cookies, , removeCookie] = useCookies(['cartProducts', 'user'])

    return <div style={{textAlign: "center"}}>
        <h3>{t("Личный кабинет")}</h3>
        <Table style={{margin: "auto", width: "90%"}}>
            <tbody><tr>
                <td>{t("Введенные контактные данные")}</td>
                <td>{cookies.user}</td>
            </tr></tbody>
        </Table>
        <NavLink to="/" onClick={event => {
            if (!window.confirm(t("Вы уверены, что хотите выйти? Содержимое корзины будет удалено."))) {
                event.preventDefault()
                return
            }
            removeCookie('user')
            removeCookie('cartProducts')
        }}><Button
            className="pink accent-4"
            node="button" waves="red"
            style={{
                color: 'white',
                overflow: "hidden",
                fontSize: "min(2.5vw, 14px)",
                marginTop: 20,
            }}>{t("Выйти")}</Button>
        </NavLink>
    </div>
}

export default PersonalDetails
