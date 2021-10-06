import React, {useState} from 'react'
import {Button, TextInput} from "react-materialize"
import {useCookies} from "react-cookie"

const RegisterForm = ({onValueChange}) => {
    const [inputUserName, setInputUserName] = useState("")
    const [,setCookie] = useCookies(['user'])

    return <>
        <TextInput
            onChange={event => onValueChange ?
                onValueChange(event.target.value) :
                setInputUserName(event.target.value)
            }
            label="Введите ваши данные для регистрации"
            placeholder=""
        />
        {onValueChange ? <></> : <Button
            node="button" waves="red" flat modal="close"
            disabled={!inputUserName}
            onClick={()=>setCookie('user', inputUserName)}>Подтвердить ввод
        </Button>}
    </>
}

export default RegisterForm
