import React, { useEffect } from 'react'
import { Button, Icon } from 'react-materialize'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import { useCookies } from 'react-cookie'

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

    const [cookies, , removeCookie] = useCookies(['cartProducts'])

    const  cartSize = Object.keys(cookies.cartProducts || {}).length

    return <div style={{ position: "absolute" }}><Button
        className={cx("blue", { pulse: cartSize })}
        fab={{ direction: "top", hoverEnabled: false }}
        floating
        large
        icon={cartSize ? <>
            <AddedProductsIndicator>{cartSize}</AddedProductsIndicator>
            <Icon>shopping_cart</Icon>
        </> : <Icon>shopping_cart</Icon>}
        node="button"

    >
        <Button
            className="blue"
            floating
            icon={<NavLink to="/cart">{
                <Icon>shopping_cart</Icon>
            }</NavLink>}
            // TODO: remove this when we add a proper shopping cart
            onClick={() => removeCookie('cartProducts')}
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
                <Icon>search</Icon>
            }</NavLink>}
            node="button"
            tooltip="Искать товар"
            tooltipOptions={{
                position: 'left'
            }}
        />
        <Button
            className="yellow darken-1"
            floating
            icon={<NavLink to="/login">{
                <Icon>login</Icon>
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
