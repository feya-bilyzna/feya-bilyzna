import React from 'react'
import { CardPanel, Row, Col, Button } from 'react-materialize'
import styles from '../css.module/PageContainer.module.css'
import cx from "classnames"
import { useCookies } from 'react-cookie'
import { useTranslation } from "react-i18next"

export default function CookiesConsent() {
    const [cookies, setCookie] = useCookies(['cookiesConsent'])
    const { t } = useTranslation()
    return cookies.cookiesConsent === undefined ? <CardPanel
        className={cx(styles.container, "z-depth-5")}
        style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: 99,
        }} >
        <Row >
            <Col
                style={{ display: "flex", marginTop: 10, justifyContent: "center" }}
                className="black-text" xl={9} m={12} s={12}>
                <div>
                    <div>{t("CookiesConsentText1")}</div>
                    <div>{t("CookiesConsentText2")}</div>
                </div>
            </Col>
            <Col
                style={{ marginTop: 10, display: "flex", justifyContent: "center", paddingTop: 10 }} xl={3} m={12} s={12}>
                <Button
                    onClick={() => { setCookie('cookiesConsent', true) }}
                    className="pink accent-4"
                >
                    Ok
                </Button >
            </Col>
        </Row>
    </CardPanel> : <></>
}
