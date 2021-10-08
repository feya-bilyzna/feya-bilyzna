import React from 'react'
import {NavLink} from "react-router-dom"
import {ImageView} from ".."

const CustomCard = ({item, image}) => {
    const customCardContentStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
        color: "black",
        padding: "2% 0px 3%",
    }

    return <div className="card hoverable" style={{margin: ".5rem 0 .1rem 0"}}>
        <NavLink to={item.route ? item.route : `/${item.id}`}>
            <div className="card-image">
                <ImageView image={image} />
            </div>
            <div className="card-content flow-text" style={customCardContentStyle}>
                {(item.vendorCode || item.brandName) ?
                    `${item.vendorCode}•${item.brandName || "Нет бренда"}` :
                    item.name
                }
            </div>
        </NavLink>
    </div>
}

export default CustomCard
