import React from 'react'
import { useTranslation } from "react-i18next"
import { Button } from 'react-materialize'
import { CustomIcon } from "../index"
import M from 'materialize-css'

const CopyLinkButton = () => {
    const { t } = useTranslation()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
        M.toast({ html: t('Ссылка скопирована!') })
    }

    return <>
        <Button
            className="grey"
            floating
            icon={<CustomIcon className={"notranslate"}>content_copy</CustomIcon>}
            node="button"
            tooltip={t("Копировать ссылку")}
            tooltipOptions={{
                position: 'left'
            }}
            onClick={copyToClipboard}
        />
    </>
}

export default CopyLinkButton
