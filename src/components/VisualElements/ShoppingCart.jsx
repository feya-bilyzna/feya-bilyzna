import React from 'react'
import {
    Button,
    Divider,
    Row,
} from "react-materialize"
import {gql, useQuery} from "@apollo/client"
import {useCookies} from 'react-cookie'
import {LoadingAnimation, CustomIcon} from ".."
import {
    CartCell,
    CartFunctionality,
    EmptyCart,
    CookieBasedCartItems,
} from '../PartialElements/ShoppingCart'
import {alertsData} from "../../data"
import { useTranslation } from "react-i18next"

const ShoppingCart = () => {
    const { t } = useTranslation()
    const SHOPPING_CART_QUERY = gql`
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


    const [cookies, , removeCookie] = useCookies(['cartProducts', 'user'])

    const {loading, error, data} = useQuery(SHOPPING_CART_QUERY, {
        variables: {
            ids: cookies.cartProducts ?
                Object.values(cookies.cartProducts).map(variantData => variantData.productId) : [],
            contactInfo: cookies.user ? cookies.user : ""
        },
    })

    const cartHeader = <h3 style={{textAlign: "center"}}>{t("Корзина")}</h3>

    if (cookies.cartProducts === undefined) return <>
        {cartHeader}
        <EmptyCart>{cookies.user ? <CartFunctionality emptyCart /> : <></>}</EmptyCart>
    </>

    if (loading) return <>
        {cartHeader}
        <LoadingAnimation style={{height: "50vh"}}/>
    </>

    if (error) return <>
        {cartHeader}
        <h5 style={{textAlign: "center"}}>{alertsData.serverRequestFailed}</h5>
    </>

    const products = Object.fromEntries(data.productsByIds.map(product => [product.id, product]))

    const fullPrice = Object.values(cookies.cartProducts || {}).reduce(
        (totalPrice, orderPosition) => totalPrice + orderPosition.price * orderPosition.amount, 0
    )

    return <>
        {cartHeader}
        <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
            <CartCell size={2}>
                <Button small
                        tooltip={t("Очистить корзину")}
                        tooltipOptions={{
                            position: 'top'
                        }}
                        className="red"
                        floating
                        icon={<CustomIcon>delete_sweep</CustomIcon>}
                        node="button" waves="light"
                        onClick={() => window.confirm(
                            t("Вы уверены, что хотите очистить корзину от всех товаров?")
                        ) && removeCookie('cartProducts')}
                />
            </CartCell>
            <CartCell size={3} bold>{t("Товар")}</CartCell>
            <CartCell size={2} bold>{t("Вариант")}</CartCell>
            <CartCell size={3} bold>{t("Количество")}</CartCell>
            <CartCell size={2} bold>{t("Цена")}</CartCell>
        </Row>
        <Divider/>

        <CookieBasedCartItems products={products}/>
        <Row style={{textAlign: "right", marginTop: 10, paddingRight: "3rem"}}>
            <b className="flow-text">{t("Итого")}: {fullPrice} грн</b>
        </Row>
        <CartFunctionality orderPrice={fullPrice} />
    </>
}

export default ShoppingCart
