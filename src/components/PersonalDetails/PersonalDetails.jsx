import React from 'react'
import {useCookies} from "react-cookie"
import { Button, Table } from 'react-materialize'
import {NavLink} from "react-router-dom"

const PersonalDetails = () => {

    const [cookies, , removeCookie] = useCookies(['cartProducts', 'user'])

    return <div style={{textAlign: "center"}}>
        <h3>Личный кабинет</h3>
        <Table style={{margin: "auto", width: "90%"}}>
            <tbody><tr>
                <td>Введенные контактные данные</td>
                <td>{cookies.user}</td>
            </tr></tbody>
        </Table>
        <NavLink to="/" onClick={event => {
            if (!window.confirm("Вы уверены, что хотите выйти? Содержимое корзины будет удалено.")) {
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
            }}>Выйти</Button>
        </NavLink>
    </div>
}

export default PersonalDetails
