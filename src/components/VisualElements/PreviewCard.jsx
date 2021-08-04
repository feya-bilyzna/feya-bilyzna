import React from 'react';
import {Card, Icon} from "react-materialize";
import {NavLink} from "react-router-dom";
import ImageView from "./ImageView";

const PreviewCard = ({item, image}) => {
    if (item.id != undefined) {
        return (
            <Card
                actions={[
                    <NavLink to={`/${item.id}`}>Подробнее</NavLink>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<ImageView route={item.route} image={image}/>}
                style={{
                    whiteSpace: "nowrap",/* Отменяем перенос текста */
                    color: "red",
                    overflow: "hidden", /* Обрезаем содержимое */
                    textOverflow: "ellipsis", /* Многоточие */
                }}
                title={item.name}
            >
                {item.description ? item.description : "Нет описания"}
            </Card>
        );
    } else {
        return (
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<ImageView route={item.route} image={image}/>}
                style={{
                    whiteSpace: "nowrap",/* Отменяем перенос текста */
                    color: "red",
                    overflow: "hidden", /* Обрезаем содержимое */
                    textOverflow: "ellipsis", /* Многоточие */
                }}
                title={item.name}
            >
                {item.description}
            </Card>
        );
    }

    // return (
    //     <Card
    //         //Этот способ вродебы короче но занимает место в Card как пустая строка если это не товар
    //         actions={[item.id ?
    //             <NavLink to={`/${item.id}`}>Подробнее</NavLink>
    //             :
    //             null
    //         ]}
    //         closeIcon={<Icon>close</Icon>}
    //         header={<ImageView route={item.route} image={image} />}
    //         style={{
//                     whiteSpace: "nowrap",/* Отменяем перенос текста */
//                     color: "red",
//                     overflow: "hidden", /* Обрезаем содержимое */
//                     textOverflow: "ellipsis", /* Многоточие */
    //         }}
    //         title={item.name }
    //     >
    //         <p>{item.description ? item.description : "Нет описания"}</p>
    //     </Card>
    // );
};

export default PreviewCard;
