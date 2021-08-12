import React from 'react';
import {Footer} from "react-materialize"
import contactsData from "../data/contactsData";

const FooterComponent = () => {
    return (
        <Footer
            style={{
                columnCount: "4",
                height: "150px",
            }}
            links={
                <ul>
                    {contactsData.contacts.map(contact =>
                        <li>
                            <a
                                className="grey-text text-lighten-3"
                                href={contact.link}
                                target="_blank"
                            >
                                {contact.name}
                            </a>
                        </li>)}
                </ul>}
        >
        </Footer>
    );
};

export default FooterComponent;
