import React from 'react';
import {NavLink} from "react-router-dom";
import {Contacts} from "./Main/Contacts";

export let Navbar = (props) => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span href="/" className="brand-logo"></span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Главная</NavLink></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
