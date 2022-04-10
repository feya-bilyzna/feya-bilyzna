import React, { useEffect } from 'react'
import { Button } from 'react-materialize'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import { useCookies } from 'react-cookie'
import { CustomIcon, LoginButton, LanguageSelector } from "./index";
import { useTranslation } from "react-i18next"

const AddedProductsIndicator = props => {
    return <div style={{
        position: "absolute",
        height: 20,
        width: 20,
        borderRadius: "100%",
        background: "red",
        color: "white",
        lineHeight: "normal",
    }}>{props.children}</div>
}

const CartButton = () => {
    const { t } = useTranslation()
    // This is a crutch. For more info, see https://github.com/react-materialize/react-materialize/issues/1136
    useEffect(() => {
        M.FloatingActionButton.init(
            document.querySelectorAll('.fixed-action-btn'),
            { direction: "top", hoverEnabled: false }
        )
    }, [])

    const [cookies] = useCookies(['cartProducts'])

    const cartSize = Object.keys(cookies.cartProducts || {}).length

    return <div style={{ position: "absolute" }}><Button
        className={cx("blue", { pulse: cartSize })}
        fab={{ direction: "top", hoverEnabled: false }}
        floating
        large
        icon={cartSize ? <>
            <AddedProductsIndicator>{cartSize}</AddedProductsIndicator>
            <CustomIcon >shopping_cart</CustomIcon>
        </> : <CustomIcon className={"notranslate"}>shopping_cart</CustomIcon>}
        node="button"

    >
        <Button
            className="blue"
            floating
            icon={<NavLink to="/cart">{
                <CustomIcon className={"notranslate"}>shopping_cart</CustomIcon>
            }</NavLink>}
            node="button"
            tooltip={t("Оформить заказ")}
            tooltipOptions={{
                position: 'left'
            }}
        />
        <Button
            className="green"
            floating
            icon={<NavLink to="/wishlist">{
                <CustomIcon className={"notranslate"}>favorite_border</CustomIcon>
            }</NavLink>}
            node="button"
            tooltip={t("Список желаний")}
            tooltipOptions={{
                position: 'left'
            }}
        />
        <LanguageSelector />
        <LoginButton cardButton={true} />
    </Button></div>
}

export default CartButton
