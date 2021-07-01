import React from 'react';
import {Card, CardTitle, Col, Icon, Row} from "react-materialize";

const CardImageTest = () => {
    return (
        <Row>
            <Col
                lx={12}
                l={12}
                m={12}
                s={12}
            >
                <Card
                    actions={[
                        <a key="1" href="#">This is a Link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Here is the standard card with an image thumbnail.
                </Card>
            </Col>
        </Row>
    );
};

export default CardImageTest;