import React, { useState } from 'react'
import { useTranslation } from "react-i18next"
import { Button } from 'react-materialize'
import { CustomIcon } from "./../index"
import M from 'materialize-css'

const CopyLink = () => {
    const { t } = useTranslation()

    const copy = () => {
        const el = document.createElement('input')
        el.value = window.location.href
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
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
            onClick={copy}
        />
    </>
}

export default CopyLink
