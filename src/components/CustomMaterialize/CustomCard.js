import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ImageView, Price } from ".."
import { Button, Icon } from "react-materialize";
import M from 'materialize-css'

const CustomCard = ({ item, image, isSubcategory }) => {
    const customCardContentStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        color: "black",
        padding: "2% 0px 3%",
    }

    const [isFavorite, setIsFavorite] = useState(false)

    return <div className="card hoverable" style={{ margin: ".5rem 0 .1rem 0" }}>
        {
            isSubcategory ?
                <Button style={{ bottom: 5, right: 5, }}
                    className="green hoverable halfway-fab waves-effect waves-light"
                    floating
                    icon={<Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>}
                    node="button"
                    tooltip={!isFavorite ? "Добавить в избранное" : "Убрать из избранного"}
                    tooltipOptions={{
                        position: 'bottom'
                    }}
                    onClick={() => {
                        setIsFavorite(!isFavorite)
                        M.toast({ html: !isFavorite ? "Добавлено в избранное" : "Убрано из избранного" })
                    }}
                />
                :
                <></>
        }
        <NavLink to={item.route ? item.route : `/${item.id}`}>
            <div className="card-image">
                <ImageView image={image} />
            </div>

            <div className="card-content flow-text" style={customCardContentStyle}>
                {(item.vendorCode || item.brandName) ?
                    `${item.vendorCode}•${item.brandName || "Нет бренда"}` :
                    item.name
                }
                {isSubcategory ? <Price item={item} /> : <></>}
            </div>
        </NavLink>
    </div>
}

export default CustomCard
