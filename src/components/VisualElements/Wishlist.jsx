import React from 'react'
import { useCookies } from "react-cookie"
import LoadingAnimation from '../PartialElements/LoadingAnimation'
import { gql, useQuery } from "@apollo/client"
import { useTranslation } from "react-i18next"
import { alertsData } from "../../data"
import GridView from './GridView'
import { CartFunctionality, EmptyCart } from '../PartialElements/ShoppingCart'
import { Button, Icon } from 'react-materialize'
import EmptyWishlist from '../PartialElements/EmptyWishlist'

const SHOPPING_CART_QUERY = gql`
    query ShoppingCartQuery($ids: [Int]!) {
        productsByIds(ids: $ids) {
            id
            images {
              url
            }
            brandName
            categories
            vendorCode
            remains {
                price
           }
         }
    }
`

const Wishlist = () => {
    const { t } = useTranslation()
    const [cookies, , removeCookie] = useCookies(['wishlist'])

    const cartHeader = <h3 style={{ textAlign: "center" }}>{t("Корзина")}</h3>

    const { loading, error, data } = useQuery(SHOPPING_CART_QUERY, {
        variables: {
            ids: cookies.wishlist ?
                Object.values(cookies.wishlist).map(itemId => parseInt([itemId])) : []
        },
    })

    if (loading) return <>
        {cartHeader}
        <LoadingAnimation style={{ height: "50vh" }} />
    </>

    if (error) return <>
        {cartHeader}
        <h5 className='notranslate' style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>
    </>

    if (cookies.wishlist === undefined) return <>
        <h3 className='notranslate' style={{ "textAlign": "center", margin: 30 }}>{t("Список желаний")}</h3>
        <EmptyWishlist/>
        </>

    return <>
        <h3 className='notranslate' style={{ "textAlign": "center", margin: 30 }}>{t("Список желаний")}
            <Button style={{ left: 15 }}
                className={"green hoverable waves-effect waves-light"}
                floating
                icon={<Icon>delete_sweep</Icon>}
                node="button"
                tooltip={t("Очистить список желаний")}
                tooltipOptions={{
                    position: 'bottom'
                }}
                onClick={() => window.confirm(
                    t("Вы уверены, что хотите очистить список желаний от всех товаров?")
                ) && removeCookie('wishlist')} />
        </h3>
        <GridView className='notranslate' isSubcategory cardItems={data.productsByIds.map(product => product)} />
    </>
}
export default Wishlist
