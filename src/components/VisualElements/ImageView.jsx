import React from 'react';
import {NavLink} from "react-router-dom";
import {CardTitle} from "react-materialize";

const ImageView = ({image, route}) => {
    const noInetImageUrl = process.env.PUBLIC_URL + '/Placeholder.jpg'

    if (route) return (<NavLink to={route}>
        <CardTitle image={image ? image : noInetImageUrl} styles={{height: 200}}/>
        {/*<div styles={{*/}
        {/*    height: 200,*/}
        {/*    backgroundImage: `url(${process.env.PUBLIC_URL}/Placeholder.gif)`*/}
        {/*}}/>*/}
        {/*<img src = {process.env.PUBLIC_URL +'/Placeholder.jpg'} alt="image" styles={{height: 200}}/>*/}
    </NavLink>)
    else return(<CardTitle image={image ? image : noInetImageUrl} styles={{height: 200}}/>)
}
export default ImageView;
