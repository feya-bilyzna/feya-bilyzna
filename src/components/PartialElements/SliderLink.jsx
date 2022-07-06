import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SliderLink({ link, children, isOuterURL }) {
    return <>{
        link === null ? <>{children}</> :
            isOuterURL ?
                <a href={link} target={"_blank"} rel={"noopener noreferrer"}>{children}</a>:
                <NavLink to={link}>{children}</NavLink>
    }</>
}
