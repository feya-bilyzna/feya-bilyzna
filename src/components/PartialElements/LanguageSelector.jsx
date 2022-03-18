import cx from "classnames"
import { useTranslation } from "react-i18next"
import { Button } from "react-materialize"
import React from 'react'
import styles from "../../css.module/language.module.css"

const LanguageSelector = () => {

    const { i18n } = useTranslation()

    return <Button
        tooltip={i18n.language === "ua" ? "Змінити мову" : "Изменить язык"}
        className={cx(styles[i18n.language])}
        onClick={() => i18n.changeLanguage(i18n.language === "ua" ? "ru" : "ua")}
        tooltipOptions={{ position: 'left' }}
    />
}

export default LanguageSelector
