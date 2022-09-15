import React, { useState } from 'react'
import { Button, TextInput } from "react-materialize"
import { useCookies } from "react-cookie"
import { useTranslation } from "react-i18next"

const RegisterForm = ({ onValueChange }) => {
    const { t } = useTranslation()
    const [inputUserName, setInputUserName] = useState("")
    const [, setCookie] = useCookies(['user'])

    return <>
        <TextInput
            onChange={event => onValueChange ?
                onValueChange(event.target.value) :
                setInputUserName(event.target.value)
            }
            placeholder={t("Введите ваши данные для регистрации")}
        />
        {onValueChange ? <></> : <Button
            node="button" waves="red" flat modal="close"
            disabled={!inputUserName}
            onClick={() => setCookie('user', inputUserName)}>{t("Подтвердить ввод")}
        </Button>}
    </>
}

export default RegisterForm
