import React from 'react';
import {NavLink} from "react-router-dom";

const CategoryPreviewCard = ({category}) => {
    return (
        <>
            <h5 style={{ "textAlign": "center"}}>{category.name}</h5>
            <NavLink to={category.href}>
                <img
                    alt="Изображение" src={category.url}
                    style={{width: '100%'}}>
                </img>
            </NavLink>
        </>
    );
};

export default CategoryPreviewCard;
