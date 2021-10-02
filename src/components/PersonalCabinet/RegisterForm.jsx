import React, {useState} from 'react'
import {Button, TextInput} from "react-materialize"
import {useCookies} from "react-cookie"

const RegisterForm = () => {
    const [inputUserName, setInputUserName] = useState("")
    const [,setCookie] = useCookies(['user'])

    return <>
        <TextInput
            onChange={event => setInputUserName(event.target.value)}
            label="Введите ваши данные для регистрации"
            placeholder="..."/>
        <Button
            node="button" waves="red" flat modal="close"
            disabled={!inputUserName}
            onClick={()=>setCookie('user', inputUserName)}>Подтвердить ввод
        </Button>
    </>
}

export default RegisterForm
