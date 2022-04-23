import React from 'react'
import { NavLink } from "react-router-dom"
import { CustomIcon } from "../index"
import { Button, Col, Modal, Row } from "react-materialize"
import { useCookies } from 'react-cookie'
import RegisterForm from "./RegisterForm"
import styles from "../../css.module/login.module.css"
import cx from "classnames";
import { useTranslation } from "react-i18next"

const LoginButton = ({ cardButton, sideNav }) => {
    const { t } = useTranslation()
    const [cookies] = useCookies(['user'])

    return cookies.user !== undefined
        ?
        cardButton ?
            <Button
                className="yellow darken-1"
                floating
                icon={<NavLink to="/login">{
                    <CustomIcon className={"notranslate"}>person</CustomIcon>
                }</NavLink>}
                node="button"
                tooltip={t("Личный кабинет")}
                tooltipOptions={{
                    position: 'left'
                }}
            />
            : sideNav ? <NavLink className='white-text' to="/login">{t("Личный кабинет")}</NavLink>
                : <NavLink to="/login">{
                    <CustomIcon className={"notranslate"}>person</CustomIcon>
                }</NavLink>
        :
        cardButton ?
            <Modal
                actions={[]} bottomSheet={false}
                header={t("Войти")}
                id="Modal-12" open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={<Button
                    className="yellow darken-1"
                    floating
                    icon={<CustomIcon className={"notranslate"}>login</CustomIcon>}
                    node="button"
                    tooltip={t("Указать контактные данные")}
                    tooltipOptions={{
                        position: 'left'
                    }}
                />}
            >
                <RegisterForm />
            </Modal>
            :
            <Modal
                actions={[]} bottomSheet={false}
                header={t("Войти")}
                id="Modal-12" open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={sideNav ?
                    <NavLink className='white-text' to={""}
                        style={{ margin: 0 }}
                    >
                        {t("Войти")}
                    </NavLink>
                    : <Button
                        className={cx(styles.login, "z-depth-0")}
                        style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}><CustomIcon
                            className="notranslate"
                        >
                            login
                        </CustomIcon></Button>}
            >
                <RegisterForm />
            </Modal>
}

export default LoginButton
