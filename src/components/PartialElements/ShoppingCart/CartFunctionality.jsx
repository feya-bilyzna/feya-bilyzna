import React, {useState} from 'react'
import {
    Button,
    Col,
    Modal,
    Row,
} from "react-materialize"
import {gql, useQuery, useMutation} from "@apollo/client"
import {useCookies} from 'react-cookie'
import {RegisterForm} from "../.."
import { PendingOrder, CartExitButton, OrderOverflowAlert } from '.'
import {cartAndOrderLimits} from "../../../data"
import M from 'materialize-css'
import { useTranslation } from "react-i18next"

const CartFunctionality = ({emptyCart, orderPrice}) => {
    const { t } = useTranslation()
    const ORDER_BY_CONTACT_INFO = gql`
    query OrderQuery($contactInfo: String!) {
        orderByContactinfo(contactInfo: $contactInfo) {
            processed
            positions {
                amount
                productremains {
                    id
                    variantName
                    price
                }
                product {
                    images {
                        url
                    }
                    id
                }
            }
        }
    }`

    const [usernameInput, setUsernameInput] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['user', 'cartProducts'])


    const {data, refetch} = useQuery(
        ORDER_BY_CONTACT_INFO, {variables: {contactInfo: cookies.user}, skip: !cookies.user}
    )

    const ORDER_CREATION_MUTATION = gql`
        mutation ShoppingCartMutation($contactInfo: String!, $ordersList: [OrderItem]!){
            __typename
                makeOrder(contactInfo: $contactInfo, ordersList: $ordersList) {
            result
        }
    }`

    const [createOrder] = useMutation(
        ORDER_CREATION_MUTATION,
        {
            onCompleted: () => {
                removeCookie('cartProducts')
                M.toast({html: t('Заказ оформлен!')})
                refetch()
            },
            onError: () => {M.toast({html: 'Произошла ошибка.'})},
        }
    )

    if (emptyCart && data?.orderByContactinfo?.positions)
        return <PendingOrder orderItems={data.orderByContactinfo.positions} />
    else if (emptyCart) return <></>

    const centerStyle = {display: "flex", justifyContent: "center", alignItems: "center"}
    const textStyle = {color: 'white', overflow: "hidden", fontSize: "min(2.5vw, 14px)"}

    const combinedProducts = []
    for (const [remainsId, orderData] of Object.entries(cookies.cartProducts || {})) {
        combinedProducts.push({remainsId: remainsId, amount: orderData.amount})
    }

    if (data?.orderByContactinfo?.positions && cookies.cartProducts !== undefined) {
        for (const position of data?.orderByContactinfo?.positions) {
            if (!(parseInt(position.productremains.id) in cookies.cartProducts))
                combinedProducts.push({remainsId: position.productremains.id, amount: position.amount})
        }
    }

    const cartOverflow = combinedProducts.length > cartAndOrderLimits

    return <>
        <Row>
            <Col s={6} m={6} l={6} xl={6}>
                <CartExitButton style={centerStyle}/>
            </Col>
            <Col s={6} m={6} l={6} xl={6}>
                <div style={centerStyle}>
                    <Modal
                        bottomSheet={false}
                        header={t("Оформление заказа")}
                        actions={<Row>
                            <Col>
                                <Button 
                                    className="pink accent-4"
                                    node="button"
                                    waves="red"
                                    flat
                                    modal="close"
                                    style={{...textStyle}}
                                    disabled={!cookies.user && !usernameInput}
                                    onClick={() => {
                                        if (!cookies.user) setCookie('user', usernameInput)
                                        createOrder(
                                            {
                                                variables: {
                                                    contactInfo: cookies.user || usernameInput,
                                                    ordersList: combinedProducts,
                                                }
                                            })
                                }}>{t("Подтвердить")}</Button>
                            </Col>
                            <Col>
                                <Button
                                    className="pink accent-4"
                                    style={{...textStyle}}
                                    flat
                                    modal="close"
                                    node="button"
                                    waves="green"
                                >{t("Отмена")}</Button>
                            </Col>
                        </Row>}
                        trigger={<Button
                            className="pink accent-4"
                            node="button"
                            waves="red"
                            disabled={cartOverflow}
                            style={textStyle}
                        >{t("Оформить заказ")}</Button>}
                    >
                        {cookies.user ?
                            <>
                                <h6>{t("Укажите контактные данные")}</h6>
                                <p>{cookies.user}</p>
                            </> :
                            <>
                                <h6>{t("Укажите контактные данные")}</h6>
                                <RegisterForm onValueChange={setUsernameInput}/>
                            </>
                        }
                        <h5><b>{orderPrice}</b> грн</h5>
                    </Modal>
                </div>
            </Col>
        </Row>
        {cartOverflow ? <OrderOverflowAlert /> : <></>}
        {data?.orderByContactinfo?.positions ?
            <PendingOrder orderItems={data.orderByContactinfo.positions} /> :
            <></>
        }
    </>
}

export default CartFunctionality
