import React from 'react'
import {useCookies} from "react-cookie";
import {NavLink} from "react-router-dom";

const PersonalCabinet = () => {

    const [cookies, , removeCookie] = useCookies(['user'])
    return <div style={{textAlign: "center"}}>
        <div>Личный кабинет</div>
        {cookies.user === undefined ? "" : <div>Данные пользователя: {cookies.user}</div>}
        <NavLink to="/" onClick={()=>{removeCookie("user")}}>Выйти</NavLink>
    </div>
}

export default PersonalCabinet
