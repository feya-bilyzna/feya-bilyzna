import React from 'react'
import { NavLink } from "react-router-dom"
import { ImageView, Price, Sale } from ".."
import { useTranslation } from "react-i18next"
import { categoriesData } from '../../data';
import WishlistButton from '../PartialElements/WishlistButton'
import { useCookies } from "react-cookie"

const CustomCard = ({ item, image, isSubcategory }) => {
    const customCardContentStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        color: "black",
        padding: "2% 0px 3%",
    }

    const [cookies] = useCookies(['wishlist'])

    const { t } = useTranslation()

    const wishlist = new Set(Object.values(cookies.wishlist || []))

    return <div className="card hoverable" style={{ margin: ".5rem 0 .1rem 0" }}>
        {isSubcategory ? <WishlistButton
            wishlist={wishlist}
            id={item.id}
            isSubcategory={isSubcategory}
        /> : <></>}
        <NavLink to={item.route ? item.route : `/${item.id}`}>
            <div className="card-image">
                <ImageView image={image} />
            </div>
            {isSubcategory && item.categories.includes(categoriesData.uncategorizedSubcategories.sale.name) ? <Sale /> : <></>}
            <div className="card-content flow-text" style={customCardContentStyle}>
                {(item.vendorCode || item.brandName) ?
                    `${item.vendorCode}•${item.brandName || t("Нет бренда")}` :
                    t(item.name)
                }
                {isSubcategory ? <Price item={item} /> : <></>}
            </div>
        </NavLink>
    </div>
}

export default CustomCard
