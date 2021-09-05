import React from 'react'
import {CustomCardTitle} from "../index"

const ImageView = ({image}) => {
    const placeholderUrl = process.env.PUBLIC_URL + '/Placeholder.jpg'

    return <CustomCardTitle image={image ? image : placeholderUrl}/>
}

export default ImageView
