import React from 'react';
import {NavLink} from "react-router-dom";
import CustomCardTitle from "../CustomMaterialize/CustomCardTitle";

const ImageView = ({image, route}) => {
    const placeholderUrl = process.env.PUBLIC_URL + '/Placeholder.jpg'
    const cardTitleComponent =
        <CustomCardTitle image={image ? image : placeholderUrl}/>

    return route ? <NavLink to={route}>
        {cardTitleComponent}
    </NavLink> : cardTitleComponent
}
export default ImageView;
