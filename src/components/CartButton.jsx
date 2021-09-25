import React, { useEffect } from 'react'
import { Button } from 'react-materialize'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import { useCookies } from 'react-cookie'
import {CustomIcon} from "./index";

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
    // This is a crutch. For more info, see https://github.com/react-materialize/react-materialize/issues/1136
    useEffect(() => {
        M.FloatingActionButton.init(
            document.querySelectorAll('.fixed-action-btn'), 
            { direction: "top", hoverEnabled: false }
        )
    }, [])

    const [cookies] = useCookies(['cartProducts'])

    const  cartSize = Object.keys(cookies.cartProducts || {}).length

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
            tooltip="Оформить заказ"
            tooltipOptions={{
                position: 'left'
            }}
        />
        <Button
            className="green"
            floating
            icon={<NavLink to="/search">{
                <CustomIcon className={"notranslate"}>favorite_border</CustomIcon>
            }</NavLink>}
            node="button"
            tooltip="Список желаний"
            tooltipOptions={{
                position: 'left'
            }}
        />
        <Button
            className="yellow darken-1"
            floating
            icon={<NavLink to="/login">{
                <CustomIcon className={"notranslate"}>login</CustomIcon>
            }</NavLink>}
            node="button"
            tooltip="Указать контактные данные"
            tooltipOptions={{
                position: 'left'
            }}
        />
    </Button></div>
}

export default CartButton
