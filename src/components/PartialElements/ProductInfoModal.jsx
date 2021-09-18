import React from 'react';
import { Col, Modal, Button, Icon } from 'react-materialize';

const ProductInfoModal = props => {
    return <Col style={{width: "100%"}}>
        <Modal style={{marginBottom: "90px"}}
            actions={[<div style={{textAlign: "center", overflow: "hidden"}}>
                <Icon small>{props.iconName}</Icon>
            </div>]}
            bottomSheet
            trigger={<Button className="pink accent-4" node="button" style={
                {width: "100%", marginBottom: 20, overflow: "hidden"}
            }>
                {props.name}
                <Icon tiny right>info_outline</Icon>
            </Button>}
        >
            {props.children}
        </Modal>
    </Col>
}

export default ProductInfoModal
