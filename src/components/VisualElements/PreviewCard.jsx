import React from 'react';
import {Card, CardTitle, Icon} from "react-materialize";
import {NavLink} from "react-router-dom";

const PreviewCard = ({item, image}) => {
    return (
            <Card
                // Для дальнейшего использования ссылки на страницу
                // actions={[
                //     <a key="1" href="#">This is a Link</a>
                // ]}
                closeIcon={<Icon>close</Icon>}
                header={item.route ? <NavLink to={item.route}>
                    <CardTitle image={image} styles={{height: 200}} />
                </NavLink> : <CardTitle image={image} styles={{height: 200}} />}
                revealIcon={<Icon>more_vert</Icon>}
                title={item.name}
            >
                {item.description}
            </Card>
    );
};

export default PreviewCard;
