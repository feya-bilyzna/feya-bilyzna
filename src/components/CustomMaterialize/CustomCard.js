import React from 'react'
import {NavLink} from "react-router-dom"
import {ImageView} from ".."

const CustomCard = ({item, image}) => {
    const customCardContentStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "2% 0 3% 0",
        textAlign: "center",
        color: "black",
    }

    return <div className="card">
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
