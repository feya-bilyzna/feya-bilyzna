import { useTranslation } from "react-i18next"
import React from 'react'
import { Button } from 'react-materialize';
import styles from "../../css.module/language.module.css"

const LanguageSelector = () => {

    const { i18n } = useTranslation()
    const label = i18n.language === "ua" ? "Змінити мову" : "Изменить язык"

    return <Button
        ariaLabel={label}
        className={styles[i18n.language]}
        tooltip={label}
        onClick={() => i18n.changeLanguage(i18n.language === "ua" ? "ru" : "ua")}
        tooltipOptions={{ position: 'left' }}
        floating
    />
}

export default LanguageSelector
