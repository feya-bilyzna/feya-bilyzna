import React from 'react'
import { Col, Row } from "react-materialize"
import { CustomCard } from ".."

const GridView = ({ cardItems, isSubcategory, route }) => {
    return (
        <Row>
            {cardItems.map((cardItem, index) => (
                <Col
                    className="darken-1 z-depth-0"
                    xl={4}
                    l={6}
                    s={6}
                    key={index}
                    style={{ padding: "0 3px 0 3px", marginTop: 0 }}
                >
                    <CustomCard
                        isSubcategory={isSubcategory}
                        item={cardItem}
                        route={route}
                        image={isSubcategory ?
                            cardItem.images[0] :
                            cardItem.imageUrl ? cardItem.imageUrl : cardItem.name
                        } />
                </Col>
            ))}
        </Row>
    )
}

export default GridView;
