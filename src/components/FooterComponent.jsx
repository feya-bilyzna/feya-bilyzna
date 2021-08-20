import React from 'react';
import {Footer} from "react-materialize"
import contactsData from "../data/contactsData";

const FooterComponent = () => {
    return (
        <Footer
            links={
                <ul>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.contacts[0].link}
                            target="_blank"
                        >
                            {contactsData.contacts[0].name}
                        </a>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.contacts[1].link}
                            target="_blank"
                        >
                            {contactsData.contacts[1].name}
                        </a>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-3"
                            href={contactsData.contacts[2].link}
                            target="_blank"
                        >
                            {contactsData.contacts[2].name}
                        </a>
                    </li>
                </ul>}
        >
            <h5>Ссылки на соц сети:</h5>
        </Footer>
    );
};

export default FooterComponent;
