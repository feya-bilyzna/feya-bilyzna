import React from 'react'
import { Button } from "react-materialize"
import { CustomIcon } from "./../"
import { useTranslation } from "react-i18next"
import { useCookies } from "react-cookie"
import cx from 'classnames'

const WishlistButton = ({ id, isSubcategory, wishlist }) => {

    const [, setCookie] = useCookies(['wishlist'])
    const isAdded = wishlist.has(id)
    const { t } = useTranslation()

    const addToWishlist = () => { setCookie('wishlist', [...wishlist, id]) }
    const removeFromWishlist = () => {
        if (!window.confirm(t("Вы уверены, что хотите убрать данный товар из списка желаний?"))) return
        setCookie(
            'wishlist',
            [...wishlist].filter(wishlistId => wishlistId !== id)
        )
    }

    return <Button style={{
        position: "absolute",
        marginBottom: "clamp(0rem, -.5rem + 2.4rem, 4.5vw)",
        right: 10}}
        className={cx('notranslate', isSubcategory ?
            "transparent hoverable halfway-fab waves-effect waves-light z-depth-0" :
            "transparent hoverable waves-effect waves-light z-depth-0")}
        floating
        icon={<CustomIcon className="pink-text accent-4">{isAdded ? "favorite" : "favorite_border"}</CustomIcon>}
        node="button"
        tooltip={t(!isAdded ? "Добавить в избранное" : "Убрать из избранного")}
        tooltipOptions={{
            position: 'bottom'
        }}
        onClick={() => isAdded ? removeFromWishlist() : addToWishlist()}
    />
}

export default WishlistButton
