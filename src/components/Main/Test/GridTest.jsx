import React from 'react';
import {Col, Row} from "react-materialize";
import CardImageTest from "./CardImageTest";

const GridTest = () => {
    return (
        <>
            <Row>
                <Col
                    className="teal red darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    m={12}
                    s={12}
                >
                    <CardImageTest/>
                </Col>
            </Row>
        </>
    );
};

export default GridTest;