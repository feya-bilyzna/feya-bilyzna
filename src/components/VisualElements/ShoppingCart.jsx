import React from 'react'
import {Button, Col, Divider, Icon, Row} from "react-materialize";
import {gql, useQuery} from "@apollo/client";
import {useCookies} from 'react-cookie'
import {CustomCardTitle, LoadingAnimation} from "../index";
import {alertsData} from "../../data";
import {NavLink} from "react-router-dom";

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
}
`
    const [cookies, setCookie, removeCookie] = useCookies(['cartProducts'])

    const arrayIds = cookies.cartProducts ?
        Object.values(cookies.cartProducts).map(variantData => variantData.productId) : []

    const {loading, error, data} = useQuery(ShoppingCartQuery, {
        variables: {ids: arrayIds},
    })

    if (loading) return <LoadingAnimation style={{height: "50vh"}}/>
    if (error) return <h5 style={{textAlign: "center"}}>{alertsData.serverRequestFailed}</h5>

    const placeholderUrl = process.env.PUBLIC_URL + '/Placeholder.jpg'

    const reducer = (totalPrice, orderPosition) => totalPrice + orderPosition.price * orderPosition.amount

    const fullPrice = Object.values(cookies.cartProducts || {}).reduce(reducer, 0)

    const products = Object.fromEntries(data.productsByIds.map(product => [product.id, product]))

    return cookies.cartProducts ? <>
            <h3 style={{textAlign: "center"}}>Корзина</h3>
            <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 0}}>
                <Col style={{margin: "auto", padding: 0}} s={1} m={1} l={1} xl={1}>
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
                        onClick={() => removeCookie('cartProducts')}
                    />
                </Col>
                <Col style={{margin: "auto", padding: 0}} s={3} m={3} l={3} xl={3}></Col>
                <Col style={{margin: "auto", padding: 0, textAlign: "center", fontWeight: "bold"}} s={4} m={4} l={4}
                     xl={4}>Описание</Col>
                <Col style={{margin: "auto", padding: 0, fontWeight: "bold"}} s={2} m={2} l={2} xl={2}>Кол-во</Col>
                <Col style={{margin: "auto 5px auto 19px", padding: 0, fontWeight: "bold"}} s={1} m={1} l={1}
                     xl={1}>Цена</Col>
            </Row>
            <Divider/>

            {cookies.cartProducts ? Object.entries(cookies.cartProducts).map(([remainsId, purchaseData], index) => {
                const productData = products[purchaseData.productId]
                const remainsData = productData.remains.find(remain => remain.id === remainsId)

                const changeOrderAmount = (amountChange) => setCookie('cartProducts',
                    {
                        ...(cookies.cartProducts || {}),
                        [remainsId]: {...purchaseData, amount: purchaseData.amount + amountChange}
                    }
                )
                const deleteOrder = () => {
                    const {[remainsId]: deleted, ...otherProducts} = cookies.cartProducts

                    if (Object.keys(otherProducts).length)
                        setCookie('cartProducts', otherProducts)
                    else
                        removeCookie('cartProducts')
                }

                return <>
                    <Row key={index} style={{display: "flex", flexWrap: "wrap", marginBottom: 0}}>
                        <Col style={{margin: "auto", padding: 0}} s={1} m={1} l={1} xl={1}>
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
                                onClick={deleteOrder}
                            />
                        </Col>
                        <Col style={{margin: "auto 0 auto 0", padding: 0}} s={3} m={3} l={3} xl={3}>
                            <NavLink to={`/${productData.id}`}>
                                <CustomCardTitle
                                    item={productData.id}
                                    image={productData.images[0]?.url ? productData.images[0].url : placeholderUrl}/>
                            </NavLink>
                        </Col>
                        <Col style={{margin: "auto 0 auto 0", textAlign: "center", fontWeight: "bold"}} s={4} m={4} l={4}
                             xl={4}>
                            {remainsData.variantName}
                        </Col>
                        <Col style={{margin: "auto", fontWeight: "bold"}} s={2} m={2} l={2} xl={2}>
                            <Button style={{padding: 0, marginBottom: 5, fontWeight: "bold"}} flat node="button"
                                    waves="light"
                                    onClick={() => changeOrderAmount(-1)}
                                    disabled={purchaseData.amount <= 1}
                            >-</Button>
                            {purchaseData.amount}
                            <Button style={{padding: 0, marginBottom: 5, fontWeight: "bold"}} flat node="button"
                                    waves="light"
                                    onClick={() => changeOrderAmount(1)}
                                    disabled={purchaseData.amount >= remainsData.remains}
                            >+</Button>
                        </Col>
                        <Col style={{margin: "auto 5px auto 19px", padding: 0, fontWeight: "bold"}} s={1} m={1} l={1}
                             xl={1}>
                            {remainsData.price}
                        </Col>
                    </Row>
                    <Divider/>
                </>
            }) : <></>}

            <Divider/>

            {fullPrice > 0 ?
                <>
                    <Row style={{paddingTop: 10}}>
                        <Col s={7} m={7} l={7} xl={7}>
                            <NavLink to={'/'}>
                                <Col><Icon>arrow_back</Icon></Col>
                                <Col>К покупкам</Col>
                            </NavLink></Col>
                        <Col style={{fontWeight: "bold"}} s={5} m={5} l={5} xl={5}>
                            <Col s={12} m={12} l={12} xl={12}>Итого: {fullPrice}</Col>
                            <Col s={12} m={12} l={12} xl={12}>
                                <NavLink to={'/checkout'}>
                                    <Button className="pink accent-4"
                                            node="button"
                                            style={{padding: "0 5px 0 5px", marginTop: 10, overflow: "hidden"}}>
                                        Оформить заказ
                                    </Button>
                                </NavLink>
                            </Col>
                        </Col>
                    </Row>
                </>
                :
                <></>}
        </>
        :
        <div style={{textAlign: "center"}}><h5>{alertsData.cartIsEmpty}</h5>
            <NavLink to={'/'}>
                <Row style={{paddingTop: 10}}>
                    <Col s={4} m={4} l={4} xl={4}></Col>
                    <Col s={1} m={1} l={1} xl={1}><Icon>arrow_back</Icon></Col>
                    <Col s={3} m={3} l={3} xl={3}>К покупкам</Col>
                    <Col s={4} m={4} l={4} xl={4}></Col>
                </Row>
            </NavLink></div>
}

export default ShoppingCart
