import React from 'react';
import {Collapsible, CollapsibleItem, Icon} from "react-materialize";

const PopoutTest = () => {
    return (
        <Collapsible
            accordion
            popout
        >
            <CollapsibleItem
                expanded={false}
                header="Telegram"
                // icon={<Icon>filter_drama</Icon>} //Не работает отображение иконки просто текст
                node="div"
            >
                Контакты Telegram
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Viber"
                // icon={<Icon>place</Icon>} //Не работает
                node="div"
            >
                Контакты Viber
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Номер телефона"
                // icon={<Icon>add</Icon>} //Не работает
                node="div"
            >
                тел. 000-000-00-00
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Электронная почта"
                // icon={<Icon>add</Icon>} //Не работает
                node="div"
            >
                email feya_123456789@gmail.com
            </CollapsibleItem>
        </Collapsible>
    );
};

export default PopoutTest;