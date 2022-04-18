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

    const salesStyle = {
        background: "linear-gradient(rgba(0,0,0,0.6) 50%, rgba(255,255,255,0) 100%)",
        color: "white",
        position: "absolute",
        top: "0%",
        fontWeight: "bolder",
        fontSize: "300%",
        padding: "39% 0%",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
    }

    const [cookies] = useCookies(['wishlist'])

    const { t } = useTranslation()

    const wishlist = new Set(Object.values(cookies.wishlist || []))

    const areAvailable = (remains) => {
        let remainLength = 0
        remains.map(remain => {
            if (remain.remains === 0) remainLength++
            return null
        })
        if (remainLength === remains.length) return true
        else return false
    }

    const handleClick = e => e.preventDefault()

    return <div className={isSubcategory && areAvailable(item.remains) ? "card" : "card hoverable"}
        style={{ margin: ".5rem 0 .1rem 0" }}>
        {isSubcategory ? <WishlistButton
            wishlist={wishlist}
            id={item.id}
            isSubcategory={isSubcategory}
        /> : <></>}
        <NavLink to={item.route ? item.route : `/${item.id}`}
            onClick={isSubcategory && areAvailable(item.remains) ? handleClick : null}>
            <div className="card-image">
                <ImageView areAvailable={isSubcategory ? areAvailable(item.remains) : false} image={image} />
            </div>
            {isSubcategory && item.categories.includes(categoriesData.uncategorizedSubcategories.sale.name) ?
                <Sale /> :
                <></>}
            <div className="card-content flow-text" style={customCardContentStyle}>
                {(item.vendorCode || item.brandName) ?
                    `${item.vendorCode}•${item.brandName || t("Нет бренда")}` :
                    t(item.name)
                }
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {isSubcategory ? <Price item={item} /> : <></>}
                </div>
            </div>
        </NavLink>
        {
            isSubcategory ? areAvailable(item.remains) ?
                <div style={salesStyle}
                    className="flow-text"
                >ПРОДАНО</div> : <></> : <></>
        }
    </div >
}

export default CustomCard
