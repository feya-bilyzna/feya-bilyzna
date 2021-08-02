import React from 'react'
import {Button, Card, CardTitle, Col, Icon, Row} from "react-materialize";
import {useParams} from 'react-router';
import {gql, useQuery} from "@apollo/client";

const DetailPage = () => {

    const {productId} = useParams()
    const ProductQuery = gql`
        query ProductQuery($id: Int!) {
          productById(id: $id) {
            description
            name
            images {
              url
              id
            }
            id
          }
        }
    `

    const {loading, error, data} = useQuery(ProductQuery, {
        variables: {id: productId},
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <Row>
            <Col
                className="black-text"
                xl={6}
                m={6}
                s={12}
            >
                {Object.values(data?.productById.images).map(image =>
                    <Card
                        key={image.id}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={image.url}>Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                    </Card>
                )}
            </Col>
            <Col
                className="white-text"
                style={{padding: '10%'}}
                xl={6}
                m={6}
                s={12}
                style={{
                    position: "sticky",
                    top: 0,
                    padding: "10%",
                }}
            >
                <Row>
                    <Col
                        className="black-text"

                    >
                        Артикул
                        <p style={{"color": "red"}}>{productId}</p>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"

                    >
                        Серия
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"

                    >
                        Тип -
                        <h5 style={{"color": "red"}}>{data?.productById.name}</h5>
                        Цвет -
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                    >
                        Значек
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                        s={1}
                    >
                        Цена
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                    >
                        Условия обмена и возврата
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                    >
                        Значек типа
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                        s={1}
                    >
                        Цвета:
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                        s={12}
                    >
                        Размеры
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                        s={12}
                    >
                        Остаток
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                        s={12}
                    >
                        <Button
                            className="darken-1"
                            node="button"
                            flat={true}
                            waves="red"
                            style={{
                                marginRight: '5px'
                            }}
                        >
                            Купить
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                    >
                        В список желаний
                    </Col>
                    <Col
                        className="black-text"
                    >
                        Найти магазин
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="black-text"
                    >
                        <h5 style={{"color": "red"}}>{data?.productById.description} </h5>
                        Состав - материалы
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default DetailPage
