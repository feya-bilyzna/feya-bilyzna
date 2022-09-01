import React, { useEffect } from 'react'
import { Button } from 'react-materialize'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import { useCookies } from 'react-cookie'
import { CustomIcon, LoginButton, LanguageSelector, CopyLinkButton } from "./index";
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

    const disabledTextSelectionStyle={userSelect: "none", webUserSelect: "none" }

    return <div style={{ position: "absolute" }}><Button
        className={cx("blue darken-2", { pulse: cartSize })}
        fab={{ direction: "top", hoverEnabled: false }}
        floating
        large
        icon={cartSize ? <>
            <AddedProductsIndicator>{cartSize}</AddedProductsIndicator>
            <CustomIcon style={disabledTextSelectionStyle}>shopping_cart</CustomIcon>
        </> : <CustomIcon style={disabledTextSelectionStyle} className={"notranslate"}>shopping_cart</CustomIcon>}
        node="button"

    >
        <Button
            className="blue darken-2"
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
            className="white"
            floating
            icon={<NavLink to="/wishlist">{
                <CustomIcon className={"notranslate pink-text accent-4"}>favorite</CustomIcon>
            }</NavLink>}
            node="button"
            tooltip={t("Список желаний")}
            tooltipOptions={{
                position: 'left'
            }}
        />
        <LanguageSelector />
        <LoginButton cardButton={true} />
        <CopyLinkButton/>
    </Button></div>
}

export default CartButton
