import React from 'react'
import { useCookies } from "react-cookie"
import LoadingAnimation from '../PartialElements/LoadingAnimation'
import { gql, useQuery } from "@apollo/client"
import { useTranslation } from "react-i18next"
import { alertsData } from "../../data"
import GridView from './GridView'
import { Button, Icon } from 'react-materialize'
import EmptyWishlist from '../PartialElements/EmptyWishlist'

const SHOPPING_CART_QUERY = gql`
    query ShoppingCartQuery($ids: [Int]!) {
        productsByIds(ids: $ids) {
            id
            images
            brandName
            categories
            vendorCode
            remains {
                price,
                remains
           }
         }
    }
`

const Wishlist = () => {
    const { t } = useTranslation()
    const [cookies, , removeCookie] = useCookies(['wishlist'])

    const { loading, error, data } = useQuery(SHOPPING_CART_QUERY, {
        variables: {
            ids: cookies.wishlist ?
                Object.values(cookies.wishlist).map(itemId => parseInt([itemId])) : []
        },
    })

    const wishlistHeader = <h4 className='notranslate' style={{ "textAlign": "center", margin: 30 }}>{t("Список желаний")}</h4>

    if (loading) return <>
        {wishlistHeader}
        <LoadingAnimation style={{ height: "50vh" }} />
    </>

    if (error) return <>
        {wishlistHeader}
        <h5 className='notranslate' style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>
    </>

    if (cookies.wishlist === undefined || cookies.wishlist.length === 0) return <>
        {wishlistHeader}
        <EmptyWishlist />
    </>

    return <>
        <div style={{ display: "flex", justifyContent: "center" }}>
            {wishlistHeader}
            <Button style={{ left: -20, bottom: -30 }}
                className={"green hoverable waves-effect waves-light "}
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
        </div>
        <GridView className='notranslate' isSubcategory cardItems={data.productsByIds.map(product => product)} />
    </>
}
export default Wishlist
