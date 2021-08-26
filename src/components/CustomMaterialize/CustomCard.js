import React from 'react'
import {NavLink} from "react-router-dom"
import ImageView from "../VisualElements/ImageView"

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
        {!item.id ?
            <NavLink to={item.route} style={{color: "black"}}>
                <div className="card-image">
                    <ImageView image={image}/>
                </div>
                <div className="card-content flow-text" style={customCardContentStyle}>
                    {item.name}
                </div>
            </NavLink>
            :
            <NavLink key={item.id} to={`/${item.id}`}>
                <div className="card-image">
                    <ImageView route={item.route} image={image}/>
                </div>
                <div className="card-content flow-text" style={customCardContentStyle}>
                    {item.vendorCode}•{item.brandName ? item.brandName : "Нет бренда"}
                </div>
            </NavLink>}
    </div>
}

export default CustomCard
