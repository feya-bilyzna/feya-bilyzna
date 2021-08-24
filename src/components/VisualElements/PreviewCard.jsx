import React from 'react';
import {Card, Icon} from "react-materialize";
import {NavLink} from "react-router-dom";
import ImageView from "./ImageView";

const PreviewCard = ({item, image}) => {
    return (
        <Card
            closeIcon={<Icon>close</Icon>}
            header={!item.id ?
                <NavLink to={item.route} style={{color: "black"}}>
                    <ImageView image={image}/>
                    <h6 style={{overflow: "hidden", textOverflow: "ellipsis", textAlign: "center"}}>{item.name}</h6>
                </NavLink>
                :
                <NavLink key={item.id} to={`/${item.id}`}>
                    <ImageView route={item.route} image={image}/>
                    <div style={{color: "black", margin: 20}}>
                        <h6 style={{overflow: "hidden", textOverflow: "ellipsis"}}>{item.name}</h6>
                        <p style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                            {item.description ? item.description : "Нет описания"}</p>
                    </div>
                </NavLink>}
            style={{
                whiteSpace: "nowrap",
            }}
        >
        </Card>
    );
};

export default PreviewCard;
