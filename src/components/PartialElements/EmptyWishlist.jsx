import React from 'react'
import { alertsData } from '../../data'
import { useTranslation } from "react-i18next"
import { Row } from 'react-materialize'
import ExitButton from './ExitButton'

const EmptyWishlist = () => {
    const { t } = useTranslation()
    return <div style={{ textAlign: "center" }}>
        <h5>{t(alertsData.wishlistIsEmpty)}</h5>
        <Row style={{ paddingTop: 10 }}>
            <ExitButton />
        </Row>
    </div>
}

export default EmptyWishlist
