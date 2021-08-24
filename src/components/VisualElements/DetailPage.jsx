import React from 'react'
import {Button, CardPanel, Col, MediaBox, Row} from "react-materialize";
import {useParams} from 'react-router';
import {gql, useQuery} from "@apollo/client";
import { LoadingAnimation } from '..';
import { alertsData } from "../../data"


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

    if (loading) return <LoadingAnimation style={{height: "50vh"}} />
    if (error) return <h5 style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>

    return (
            <Row>
                <Col
                    className="black-text"
                    xl={6}
                    l={6}
                    m={6}
                    s={12}
                >
                    {Object.values(data?.productById.images).map(image =>
                        <MediaBox
                            key={image.id}
                            options={{
                                inDuration: 250,
                                outDuration: 200

                            }}
                        >
                            <img style={{
                                marginTop: 15,
                                boxShadow: "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)",
                                borderRadius: "2px"
                            }}
                                 alt="Изображение товара"
                                 src={image.url}
                                 width="100%"
                            />
                        </MediaBox>
                    )}
                </Col>
                <Col
                    className="white-text"
                    xl={6}
                    l={6}
                    m={6}
                    s={12}
                    style={{
                        position: "sticky",
                        top: 0,
                    }}
                >
                    <CardPanel>
                        <Row>
                            <Col
                                xl={12}
                                l={12}
                                m={12}
                                s={12}
                                className="black-text"
                            >
                                Артикул
                                <p style={{"color": "red"}}>{productId}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xl={12}
                                l={12}
                                m={12}
                                s={12}
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
                    </CardPanel>
                </Col>
            </Row>
    )
}

export default DetailPage
