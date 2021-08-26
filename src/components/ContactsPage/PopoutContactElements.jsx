import React from 'react';
import {Collapsible, CollapsibleItem} from "react-materialize";
import contactsData from "../../data/contactsData"

const PopoutContactElements = () => {
    return <Collapsible
        accordion
        popout
    >
        {contactsData.contacts.map(contact =>
            <CollapsibleItem
                expanded={false}
                header={contact.name}
                node="div"
                style={{background: "white"}}
                key={contact.link}
            >
                <p>{contact.description}
                    <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.name}
                    </a>
                </p>
            </CollapsibleItem>)}
    </Collapsible>
}

export default PopoutContactElements;
