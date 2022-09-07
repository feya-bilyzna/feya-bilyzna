import React, { useState } from 'react'
import { Button, TextInput } from "react-materialize"
import { useCookies } from "react-cookie"
import { useTranslation } from "react-i18next"

const RegisterForm = ({ onValueChange, inputId }) => {
    const { t } = useTranslation()
    const [inputUserName, setInputUserName] = useState("")
    const [, setCookie] = useCookies(['user'])

    return <>
        <TextInput
            id={inputId}
            onChange={event => onValueChange ?
                onValueChange(event.target.value) :
                setInputUserName(event.target.value)
            }
            label={t("Введите ваши данные для регистрации")}
            placeholder=""
        />
        {onValueChange ? <></> : <Button
            node="button" waves="red" flat modal="close"
            disabled={!inputUserName}
            onClick={() => setCookie('user', inputUserName)}>{t("Подтвердить ввод")}
        </Button>}
    </>
}

export default RegisterForm
