import React from 'react';
import { Col, Modal, Button } from 'react-materialize';
import { CustomIcon } from './../'

const ProductInfoModal = props => {
    return <Col style={{ width: "100%" }}>
        <Modal style={{ marginBottom: "90px" }}
            actions={[<div style={{ textAlign: "center", overflow: "hidden" }}>
                <CustomIcon small>{props.iconName}</CustomIcon>
            </div>]}
            bottomSheet
            trigger={<Button className="pink accent-4" node="button" style={
                { width: "100%", marginBottom: 20, overflow: "hidden" }
            }>
                {props.name}
                <CustomIcon tiny right>info_outline</CustomIcon>
            </Button>}
        >
            {props.children}
        </Modal>
    </Col>
}

export default ProductInfoModal
