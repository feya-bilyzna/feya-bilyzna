import React from 'react'
import { useCookies } from "react-cookie"
import { LoadingAnimation, CustomIcon, GridView, MetaTags } from '../'
import { gql, useQuery } from "@apollo/client"
import { useTranslation } from "react-i18next"
import { alertsData, metaTagsData } from "../../data"
import { Button } from 'react-materialize'
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

    let pageContent
    if (loading) pageContent =
        <LoadingAnimation style={{ height: "50vh" }} />
    else if (error) pageContent =
        <h5 className='notranslate' style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>
    else if (cookies.wishlist === undefined || cookies.wishlist.length === 0) pageContent =
        <EmptyWishlist />
    else pageContent = <>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={{ left: 140, bottom: 65, marginBottom: -45 }}
                className={"pink accent-4 hoverable waves-effect waves-light"}
                floating
                icon={<CustomIcon className='white-text'>delete_sweep</CustomIcon>}
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

    return <>
        {wishlistHeader}
        <MetaTags {...metaTagsData.wishlist} />
        {pageContent}
    </>

}
export default Wishlist
