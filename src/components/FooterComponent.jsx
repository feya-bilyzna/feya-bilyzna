import React from 'react'
import {Footer} from "react-materialize"
import contactsData from "../data/contactsData"
import {NavLink} from "react-router-dom"

const FooterComponent = () => {
    return <Footer
            style={{zIndex: 3}}
            className={"pink accent-4"}
            copyrights="Нижнее бельё по доступным ценам"
            moreLinks={<NavLink
                className="white-text right"
                to={"/contacts"}
            >
                Больше контактов
            </NavLink>}
            links={
                <ul>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contactsData.instagram}
                        </a>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contactsData.facebook}
                        </a>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contactsData.googleMaps}
                        </a>
                    </li>
                </ul>}
        >
            <h5>Ссылки на соц сети:</h5>
        </Footer>
}

export default FooterComponent
