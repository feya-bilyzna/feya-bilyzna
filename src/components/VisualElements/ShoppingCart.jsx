import React, {useState} from 'react'
import {Button, Col, Divider, Icon, MediaBox, Row} from "react-materialize";
import {gql, useQuery} from "@apollo/client";
import {useCookies} from 'react-cookie'
import {LoadingAnimation} from "../index";
import {alertsData} from "../../data";

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

    const [cookies, setCookie] = useCookies(['cartProducts'])

    const arrayIds = cookies.cartProducts ?
        Object.values(cookies.cartProducts).map(variantData => variantData.productId) : []

    const {loading, error, data} = useQuery(ShoppingCartQuery, {
        variables: {ids: arrayIds},
    })

    if (loading) return <LoadingAnimation style={{height: "50vh"}}/>
    if (error) return <h5 style={{textAlign: "center"}}>{alertsData.serverRequestFailed}</h5>

    return <>
        <h3 style={{textAlign: "center"}}>Корзина</h3>
        <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 0}}>
            <Col style={{margin: "auto", padding: 0}} s={1} m={1} l={1} xl={1}></Col>
            <Col style={{margin: "auto", padding: 0}} s={3} m={3} l={3} xl={3}></Col>
            <Col style={{margin: "auto", padding: 0, textAlign: "center"}} s={4} m={4} l={4} xl={4}>Описание</Col>
            <Col style={{margin: "auto", padding: 0}} s={2} m={2} l={2} xl={2}>Кол-во</Col>
            <Col style={{margin: "auto 5px auto 19px", padding: 0}} s={1} m={1} l={1} xl={1}>Цена</Col>
        </Row>
        <Divider/>

        {cookies.cartProducts ? Object.entries(cookies.cartProducts).map(cookieVariantData =>
            Object.values(data.productsByIds).map(pr => pr.remains.map((remain, index) => remain.id == cookieVariantData[0] ?
                <>
                    <Row key={index} style={{display: "flex", flexWrap: "wrap", marginBottom: 0}}>
                        <Col style={{margin: "auto", padding: 0}} s={1} m={1} l={1} xl={1}>
                            <Button
                                small
                                tooltip="Удалить из корзины?"
                                tooltipOptions={{
                                    position: 'top'
                                }}
                                className="red"
                                floating
                                icon={<Icon>delete_forever</Icon>}
                                large
                                node="button"
                                waves="light"
                            />
                        </Col>
                        <Col style={{margin: "auto 0 auto 0", padding: 0}} s={3} m={3} l={3} xl={3}>
                            <MediaBox style={{width: "33.3333333333%"}}><img
                                alt="Фото"
                                src={pr.images[0].url}
                                width="100%"
                            /></MediaBox>
                        </Col>
                        <Col style={{margin: "auto 0 auto 0", textAlign: "center"}} s={4} m={4} l={4} xl={4}>
                            {pr.remains.map(variant => variant.variantId == cookieVariantData[1].variantId ? variant.variantName : "")}
                        </Col>
                        <Col style={{margin: "auto",}} s={2} m={2} l={2} xl={2}>
                            <Button style={{padding: 0, marginBottom: 5}} flat node="button" waves="light">-</Button>
                            {cookieVariantData[1].amount}
                            <Button style={{padding: 0, marginBottom: 5}} flat node="button" waves="light">+</Button>
                        </Col>
                        <Col style={{margin: "auto 5px auto 19px", padding: 0}} s={1} m={1} l={1} xl={1}>
                            {remain.price}
                            {/*{setFullPrice((prevFullPrice) => prevFullPrice+remain.price)}*/}
                        </Col>
                    </Row>
                    <Divider/>
                </>
                :
                <></>
            ))) : <></>}
        <Divider/>

        <>
            <Row style={{textAlign: "center"}}>
                <Col s={6} m={6} l={6} xl={6}> </Col>
                <Col s={6} m={6} l={6} xl={6}>Итого: 9999</Col>
            </Row>
            <Row style={{textAlign: "center"}}>
                <Col s={6} m={6} l={6} xl={6}> </Col>
                <Col s={6} m={6} l={6} xl={6}>Оформить заказ</Col>
            </Row>
        </>
        :
        <></>
    </>
}

export default ShoppingCart
