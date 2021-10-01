import React from 'react'
import {Button, TextInput} from "react-materialize";
import {useCookies} from "react-cookie";

const RegisterForm = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const getUserEmail = () => {
        if (document.getElementById("TextInput-58").value !== undefined)
            setCookie('user', document.getElementById("TextInput-58").value)
    }
    console.log(cookies.user)

    return <>
        <TextInput id="TextInput-58" label="Введите ваши данные для регистрации" placeholder="..."/>
        <Button node="button" waves="red" flat modal="close"
                onClick={getUserEmail}>Подтвердить ввод</Button>
    </>
}

export default RegisterForm
