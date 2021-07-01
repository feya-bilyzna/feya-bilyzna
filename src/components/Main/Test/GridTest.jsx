import React from 'react';
import {Col, Row} from "react-materialize";
import MediaBoxTest from "./MediaBoxTest";
import CardImageTest from "./CardImageTest";

const GridTest = () => {
    return (
        <>
            <Row >
                <Col
                    className="teal red darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={9}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
            </Row>
        </>
    );
};

export default GridTest;