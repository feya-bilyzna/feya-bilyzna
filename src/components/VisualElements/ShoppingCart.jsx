import React, { Fragment } from 'react'
import {Button, Col, Divider, Icon, Row} from "react-materialize";
import {gql, useQuery} from "@apollo/client";
import {useCookies} from 'react-cookie'
import {LoadingAnimation, ImageView} from "..";
import {alertsData} from "../../data";
import {NavLink} from "react-router-dom";


const CartCell = ({size, children, bold}) => {
    return <Col s={size} m={size} l={size} xl={size} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: bold ? "bold" : "normal",
        fontSize: "min(2.5vw, 14px)",
    }}>{children}</Col>
}


const ShoppingCart = () => {
    const ShoppingCartQuery = gql`
    query ShoppingCartQuery($ids: [Int]!) {
        productsByIds(ids: $ids) {
            id
            images {
                url
            }
            remains {
                id
                price
                variantId
                variantName
                remains
            }
        }
    }`

    const [cookies, setCookie, removeCookie] = useCookies(['cartProducts'])

    const deleteOrder = (remainsId) => {
        if (!window.confirm("Вы уверены, что хотите убрать данный товар из корзины?")) return
        const {[remainsId]: deleted, ...otherProducts} = cookies.cartProducts

        if (Object.keys(otherProducts).length)
            setCookie('cartProducts', otherProducts)
        else
            removeCookie('cartProducts')
    }

    const {loading, error, data} = useQuery(ShoppingCartQuery, {
        variables: {ids: cookies.cartProducts ?
            Object.values(cookies.cartProducts).map(variantData => variantData.productId) : []
        },
    })

    const cartHeader = <h3 style={{textAlign: "center"}}>Корзина</h3>

    if (cookies.cartProducts === undefined) return <>
        {cartHeader}
        <div style={{textAlign: "center"}}><h5>{alertsData.cartIsEmpty}</h5>
            <Row style={{paddingTop: 10}}>
                <NavLink to={'/'}>
                    <Button
                        className="pink accent-4"
                        node="button"
                        waves="red"
                        style={{
                            color: 'white',
                            overflow: "hidden",
                            fontSize: "min(2.5vw, 14px)",
                        }}
                    >
                        <Icon left>arrow_back</Icon>
                        К покупкам
                    </Button>
                </NavLink>
            </Row>
        </div>
    </>

    if (loading) return <>
        {cartHeader}
        <LoadingAnimation style={{height: "50vh"}}/>
    </>
    if (error) return <>
        {cartHeader}
        <h5 style={{textAlign: "center"}}>{alertsData.serverRequestFailed}</h5>
    </>

    const fullPrice = Object.values(cookies.cartProducts || {}).reduce(
        (totalPrice, orderPosition) => totalPrice + orderPosition.price * orderPosition.amount, 0
    )

    const products = Object.fromEntries(data.productsByIds.map(product => [product.id, product]))

    return <>
        {cartHeader}
        <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
            <CartCell size={2}>
                <Button
                    small
                    tooltip="Очистить корзину"
                    tooltipOptions={{
                        position: 'top'
                    }}
                    className="red"
                    floating
                    icon={<Icon>delete_sweep</Icon>}
                    node="button"
                    waves="light"
                    onClick={() => window.confirm(
                        "Вы уверены, что хотите очистить корзину от всех товаров?"
                    ) && removeCookie('cartProducts')}
                />
            </CartCell>
            <CartCell size={3} bold>Товар</CartCell>
            <CartCell size={2} bold>Вариант</CartCell>
            <CartCell size={3} bold>Количество</CartCell>
            <CartCell size={2} bold>Цена</CartCell>
        </Row>
        <Divider/>

        {Object.entries(cookies.cartProducts).map(([remainsId, purchaseData], index) => {
            const productData = products[purchaseData.productId]
            const remainsData = productData.remains.find(remain => remain.id === remainsId)

            const changeOrderAmount = (amountChange) => setCookie(
                'cartProducts',
                {
                    ...(cookies.cartProducts || {}),
                    [remainsId]: {...purchaseData, amount: purchaseData.amount + amountChange}
                }
            )

            return <Fragment key={index}>
                <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
                    <CartCell size={2}>
                        <Button
                            small
                            tooltip="Удалить из корзины"
                            tooltipOptions={{
                                position: 'top'
                            }}
                            className="red"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            node="button"
                            waves="light"
                            onClick={() => deleteOrder(remainsId)}
                        />
                    </CartCell>
                    <CartCell size={3}>
                        <NavLink to={`/${productData.id}`} style={{width: "100%"}}>
                            <ImageView image={productData.images[0]?.url} />
                        </NavLink>
                    </CartCell>
                    <CartCell size={2}>{remainsData.variantName}</CartCell>
                    <CartCell size={3}>
                        <Button flat node="button"
                                className="red lighten-2"
                                waves="light"
                                onClick={() => changeOrderAmount(-1)}
                                disabled={purchaseData.amount <= 1}
                                small
                                floating
                                style={{
                                    width: 18,
                                    height: 18,
                                    lineHeight: "18px",
                                    color: "white",
                                    margin: 5,
                                }}
                        >-</Button>
                        {purchaseData.amount}
                        <Button flat node="button"
                                className="red lighten-2"
                                waves="light"
                                onClick={() => changeOrderAmount(1)}
                                disabled={purchaseData.amount >= remainsData.remains}
                                small
                                floating
                                style={{
                                    width: 18,
                                    height: 18,
                                    lineHeight: "18px",
                                    color: "white",
                                    margin: 5,
                                }}
                        >+</Button>
                    </CartCell>
                    <CartCell size={2} bold>{remainsData.price * purchaseData.amount} грн</CartCell>
                </Row>
                <Divider/>
            </Fragment>
        })}

        <Row style={{textAlign: "right", marginTop: 10, paddingRight: "3rem"}}><b className="flow-text">Итого: {fullPrice} грн</b></Row>
        <Row>
            <Col s={6} m={6} l={6} xl={6}>
                <NavLink to={'/'} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button
                        className="pink accent-4"
                        node="button"
                        waves="red"
                        style={{
                            color: 'white',
                            overflow: "hidden",
                            fontSize: "min(2.5vw, 14px)",
                        }}
                    >
                        <Icon left>arrow_back</Icon>
                        К покупкам
                    </Button>
                </NavLink>
            </Col>
            <Col s={6} m={6} l={6} xl={6}>
                <NavLink to={'/checkout'} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button className="pink accent-4"
                            node="button"
                            waves="red"
                            style={{
                                color: 'white',
                                overflow: "hidden",
                                fontSize: "min(2.5vw, 14px)",
                            }}>
                        Оформить заказ
                    </Button>
                </NavLink>
            </Col>
        </Row>
        
    </>
}

export default ShoppingCart
