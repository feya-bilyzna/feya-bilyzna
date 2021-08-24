import React from 'react';
import {PopoutContactElements} from "../../components";
import {CardPanel} from "react-materialize";

const ContactsPage = () => {
    return (
        <div>
            <CardPanel style={{paddingBottom: "0.01%", paddingTop: "0%"}}>
                <h3 style={{ textAlign: "center" }}>Контактная информация</h3>
            </CardPanel>
            <PopoutContactElements />
        </div>)
}

export default ContactsPage
