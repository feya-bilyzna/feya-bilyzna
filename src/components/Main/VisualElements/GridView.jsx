import React from 'react';
import {Col, Row} from "react-materialize";
import PreviewCard from "./PreviewCard";

const GridView = () => {
    return (
        <>
            <Row>
                <Col
                    className="teal red darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                >
                    <PreviewCard/>
                </Col>
            </Row>
        </>
    );
};

export default GridView;
