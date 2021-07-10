import React from 'react';
import {Col, Row} from "react-materialize";
import {CategoryPreviewCard} from "../../components";

const CategoryGridView = ({CategoryList}) => {
    return (
                <Row>
                    {CategoryList.map((category)=>(
                        <Col
                            className="teal darken-1"
                            xl={4}
                            l={6}
                            key={category.url}
                        >
                            <CategoryPreviewCard category={category}/>
                        </Col>
                    ))}
                </Row>
    );
};

export default CategoryGridView;
