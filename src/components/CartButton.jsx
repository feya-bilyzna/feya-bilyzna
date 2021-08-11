import React, { useEffect } from 'react'
import { Button, Icon } from 'react-materialize'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'

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

    // We'll probably use redux or other global storing method
    const addedProducts = 3

    return <div style={{ position: "absolute" }}><Button
        className={cx("blue", { pulse: addedProducts })}
        fab={{ direction: "top", hoverEnabled: false }}
        floating
        large
        icon={addedProducts ? <>
            <AddedProductsIndicator>{addedProducts}</AddedProductsIndicator>
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
