import React from 'react'
import {Col, Row} from "react-materialize"
import {CustomCard} from ".."

const GridView = ({cardItems, apiPatterns, route}) => {
    return (
        <Row>
            {cardItems.map((cardItem, index) => (
                <Col
                    className="darken-1"
                    xl={4}
                    l={6}
                    s={6}
                    key={index}
                    style={{margin: "0", padding: "3px"}}
                >
                    <CustomCard
                        item={cardItem}
                        route={route}
                        image={apiPatterns ?
                            cardItem.images[0]?.url :
                            cardItem.imageUrl ? cardItem.imageUrl : cardItem.name
                        } />
                </Col>
            ))}
        </Row>
    )
}

export default GridView;
