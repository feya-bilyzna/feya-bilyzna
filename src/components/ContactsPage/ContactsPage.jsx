import React from 'react'
import { PopoutContactElements } from "../../components"
import { useTranslation } from "react-i18next"

const ContactsPage = () => {
    const { t } = useTranslation()
    return <>
        <h3 style={{ textAlign: "center" }}>{t("Контактная информация")}</h3>
        <PopoutContactElements />
    </>
}

export default ContactsPage
