import React, { Fragment } from 'react'
import {
    Button,
    Divider,
    Row,
} from "react-materialize"
import { useCookies } from 'react-cookie'
import { ImageView, CustomIcon } from "../.."
import { CartCell, ChangeAmountButton } from '.'
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const CookieBasedCartItems = ({ products }) => {
    const { t } = useTranslation()
    const [cookies, setCookie, removeCookie] = useCookies(['cartProducts'])
    if (!cookies.cartProducts) return <></>

    const deleteCartItem = (remainsId) => {
        if (!window.confirm(t("Вы уверены, что хотите убрать данный товар из корзины?"))) return
        const { [remainsId]: deleted, ...otherProducts } = cookies.cartProducts

        if (Object.keys(otherProducts).length)
            setCookie('cartProducts', otherProducts)
        else
            removeCookie('cartProducts')
    }

    return Object.entries(cookies.cartProducts).map(
        ([remainsId, purchaseData], index) => {
            const productData = products[purchaseData.productId]
            const remainsData = productData.remains.find(remain => remain.id === remainsId)

            const changeOrderAmount = (amountChange, remainsId) => setCookie(
                'cartProducts',
                {
                    ...(cookies.cartProducts || {}),
                    [remainsId]: { ...purchaseData, amount: purchaseData.amount + amountChange }
                }
            )

            return <Fragment key={index}>
                <Row style={{ display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5 }}>
                    <CartCell size={2}>
                        <Button small
                            tooltip={t("Удалить из корзины")}
                            tooltipOptions={{
                                position: 'top'
                            }}
                            className="red" floating
                            icon={<CustomIcon>delete_forever</CustomIcon>}
                            node="button" waves="light"
                            onClick={() => deleteCartItem(remainsId)}
                        />
                    </CartCell>
                    <CartCell size={3}>
                        <NavLink to={`/${productData.id}`} style={{ width: "100%" }}>
                            <ImageView image={productData.images[0]?.url} />
                        </NavLink>
                    </CartCell>
                    <CartCell size={2}>{remainsData.variantName}</CartCell>
                    <CartCell size={3}>
                        <ChangeAmountButton
                            disabled={purchaseData.amount <= 1}
                            onClickFunc={() => changeOrderAmount(-1, remainsId)}
                        >-</ChangeAmountButton>
                        {purchaseData.amount}
                        <ChangeAmountButton
                            disabled={purchaseData.amount >= remainsData.remains}
                            onClickFunc={() => changeOrderAmount(1, remainsId)}
                        >+</ChangeAmountButton>
                    </CartCell>
                    <CartCell size={2} bold>{remainsData.price * purchaseData.amount} грн</CartCell>
                </Row>
                <Divider />
            </Fragment>
        }
    )
}

export default CookieBasedCartItems
