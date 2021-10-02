import React from 'react'
import {useCookies} from "react-cookie"
import {NavLink} from "react-router-dom"

const PersonalCabinet = () => {

    const [cookies, , removeCookie] = useCookies(['cartProducts', 'user'])

    const removeAllCookie = () => {
        removeCookie('user')
        removeCookie('cartProducts')
    }

    return <div style={{textAlign: "center"}}>
        <div>Личный кабинет</div>
        {cookies.user === undefined ? "" : <div>Данные пользователя: {cookies.user}</div>}
        <NavLink to="/" onClick={removeAllCookie}>Выйти</NavLink>
    </div>
}

export default PersonalCabinet
