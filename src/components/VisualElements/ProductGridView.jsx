import React from 'react';
import {Col, Row} from "react-materialize";
import {ProductPreviewCard} from "../../components";

const ProductGridView = ({products}) => {
    return (
        <Row>
            {products.map((product) => (
                <Col
                    className="teal darken-1"
                    xl={4}
                    l={6}
                    key={product.id}
                >
                    <ProductPreviewCard  product={product}/>
                </Col>
            ))}
        </Row>
    );
};

export default ProductGridView;
