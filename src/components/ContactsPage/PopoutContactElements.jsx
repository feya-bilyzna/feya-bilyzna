import React from 'react';
import { Collapsible, CollapsibleItem } from "react-materialize";
import contactsData from "../../data/contactsData"
import { useTranslation } from "react-i18next"

const PopoutContactElements = () => {
    const { t } = useTranslation()
    return <Collapsible
        accordion
        popout
    >
        {contactsData.contacts.map((contact, index) =>
            <CollapsibleItem
                expanded={false}
                header={contact.name}
                node="div"
                style={{ background: "white" }}
                key={index}
            >
                <p>{t(contact.description)}
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
