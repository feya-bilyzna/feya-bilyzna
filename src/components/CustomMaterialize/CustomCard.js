import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import {ImageView} from ".."
import {Button, Icon} from "react-materialize";

const CustomCard = ({item, image}) => {
    const customCardContentStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        color: "black",
        padding: "2% 0px 3%",
    }

    const [isFavorite, setIsFavorite] = useState(false)

    return <div className="card hoverable" style={{margin: ".5rem 0 .1rem 0"}}>
        {item.remains ?
            <Button style={{bottom: 5, right: 5,}}
                    className="green hoverable halfway-fab waves-effect waves-light"
                    floating
                    icon={<Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>}
                    node="button"
                    tooltip="Добавить в избранное"
                    tooltipOptions={{
                        position: 'bottom'
                    }}
                    onClick={() => setIsFavorite(!isFavorite)}
            /> : <></>}
        <NavLink to={item.route ? item.route : `/${item.id}`}>
            <div className="card-image">
                <ImageView image={image}/>
            </div>

            <div className="card-content flow-text" style={customCardContentStyle}>
                {(item.vendorCode || item.brandName) ?
                    `${item.vendorCode}•${item.brandName || "Нет бренда"}` :
                    item.name
                }
                {item.remains ? <div
                    className="pink-text accent-4"
                >{item.remains[0].price ? `${item.remains[0].price} грн` : "Нет цены"}</div> : <></>}
            </div>
        </NavLink>
    </div>
}

export default CustomCard
