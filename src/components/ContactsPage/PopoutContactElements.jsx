import React from 'react';
import {Collapsible, CollapsibleItem} from "react-materialize";

const PopoutContactElements = () => {
    return (
        <Collapsible
            accordion
            popout
        >
            <CollapsibleItem
                expanded={false}
                header="Telegram"
                node="div"
            >
                Контакты Telegram
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Viber"
                node="div"
            >
                Контакты Viber
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Номер телефона"
                node="div"
            >
                тел. 000-000-00-00
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Электронная почта"
                node="div"
            >
                email feya_123456789@gmail.com
            </CollapsibleItem>
        </Collapsible>
    );
};

export default PopoutContactElements;
