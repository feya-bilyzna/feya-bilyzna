import React from 'react';
import { Row, Col } from 'react-materialize';

const AdditionalInfo = props => {
    return <div className="z-depth-1" style={{ padding: "0 10px 0 10px" }}>
        <Row style={{ marginBottom: 10 }}>
            <Col className="black-text" s={12}>
                <h6 style={{ marginBottom: 15 }}>{props.header}</h6>
                {props.children}
            </Col>
        </Row>
    </div>
}

export default AdditionalInfo
