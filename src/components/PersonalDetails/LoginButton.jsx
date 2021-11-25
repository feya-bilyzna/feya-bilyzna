import React from 'react'
import {NavLink} from "react-router-dom"
import {CustomIcon} from "../index"
import {Button, Col, Modal, Row} from "react-materialize"
import {useCookies} from 'react-cookie'
import RegisterForm from "./RegisterForm"
import styles from "../../css.module/login.module.css"
import cx from "classnames";

const LoginButton = ({cardButton, sideNav}) => {

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
                tooltip="Личный кабинет"
                tooltipOptions={{
                    position: 'left'
                }}
            />
            : sideNav ? <NavLink to="/login">{
                <Row style={{marginBottom: 0}}><Col style={{padding: 0}}>Личный кабинет</Col>
                    <Col>
                        <CustomIcon  tiny right
                            style={{paddingTop: 17.5, marginLeft: 0}}
                            className={"notranslate"}>person</CustomIcon>
                    </Col>
                </Row>
            }</NavLink>
            : <NavLink to="/login">{
                <CustomIcon  className={"notranslate"}>person</CustomIcon>
            }</NavLink>
        :
        cardButton ?
            <Modal
                actions={[]} bottomSheet={false}
                header="Войти"
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
                    tooltip="Указать контактные данные"
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
                header="Войти"
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
                        <NavLink to={""}
                                 className="flow-text white z-depth-0"
                                 style={{
                                     color: "rgba(0,0,0,0.87)",
                                 }}
                        >
                            <Row style={{marginBottom: 0}}>
                                <Col style={{padding: 0}}>Войти</Col>
                                <Col><CustomIcon
                                    tiny right className={"notranslate"}
                                    style={{paddingTop: 17.5, marginLeft: 0}}
                                >login</CustomIcon></Col>
                            </Row>
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
                <RegisterForm/>
            </Modal>
}

export default LoginButton
