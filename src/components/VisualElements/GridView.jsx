import React from 'react'
import {Col, Row} from "react-materialize"
import {PreviewCard} from "../../components"

const GridView = ({cardItems, apiPatterns}) => {
    return (
        <Row>
            {cardItems.map((cardItem)=>(
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    s={12}
                    key={cardItem.name}
                >
                    <PreviewCard item={cardItem} image={apiPatterns ? cardItem.images[0]?.url : cardItem.imageUrl}/>
                </Col>
            ))}
        </Row>
    )
}

export default GridView;
