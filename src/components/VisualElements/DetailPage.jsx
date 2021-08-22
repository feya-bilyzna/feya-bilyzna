import React from 'react'
import {Button, CardPanel, Col, MediaBox, Row} from "react-materialize";
import {useParams} from 'react-router';
import {gql, useQuery} from "@apollo/client";
import { LoadingAnimation } from '..';
import { alertsData } from "../../data"
import cx from 'classnames'


const VariantSelectors = ({ selectorsData, updateSelector }) => {
    return (
        Object.entries(selectorsData).map(
            ([selectorType, selectors]) =>
                <Fragment key={selectorType}>
                    <Row
                        style={{ marginBottom: 10, marginTop: 10 }}
                    >
                        {selectors.map(selector =>
                            <Button key={selector.value}
                                floating
                                style={{ margin: 3 }}
                                disabled={selector.disabled}
                                className={cx(
                                    selectorType === "color" ? selector.value : "red lighten-2",
                                    { pulse: selector.selected })
                                }
                                onClick={() => updateSelector(selectorType, selector.value)}
                            >{selectorType === "color" ? "" : selector.value}</Button>
                        )}
                    </Row>
                    <Divider />
                </Fragment>
        )
    )
}


const DetailPage = () => {

    const ProductQuery = gql`
    query ProductQuery($id: Int!) {
        productById(id: $id) {
            categories
            description
            id
            images {
              id
              url
            }
            name
            remains {
              price
              variantId
              variantName
              variantStyle
              remains
            }
            brandName
          }
        }
    `

    const [selectedOptions, setselectedOptions] = useState({})
    const { productId } = useParams()
    const { loading, error, data } = useQuery(ProductQuery, {
        variables: { id: productId },
    })

    if (loading) return <LoadingAnimation style={{ height: "50vh" }} />
    if (error) return <h5 style={{ textAlign: "center" }}>{alertsData.serverRequestFailed}</h5>

    const allowedSelectors = new Set(['color', 'size', 'bandSize', 'cupSize'])
    const updateSelector = (selector, value) => {
        if (allowedSelectors.has(selector)) {
            if (selectedOptions[selector] === value) {
                setselectedOptions({ ...selectedOptions, [selector]: undefined })
            } else setselectedOptions({ ...selectedOptions, [selector]: value })
        }
    }

    const variantIsValid = variant => variant && Object.keys(variant).map(
        value => allowedSelectors.has(value)
    ).every(value => value)

    const intersection = sets => sets.reduce(
        (intersected, set) => new Set([...set].filter(x => intersected.has(x)))
    )

    const variantsData = {}
    const combinedVariants = {}
    const addOrCreate = (selector, value, relatedSelector, relatedValue) => {
        if (variantsData[selector] === undefined)
            variantsData[selector] = {}
        if (variantsData[selector][value] === undefined)
            variantsData[selector][value] = {}
        if (variantsData[selector][value][relatedSelector] === undefined)
            variantsData[selector][value][relatedSelector] = new Set()
        variantsData[selector][value][relatedSelector].add(relatedValue)

        if (combinedVariants[selector] === undefined)
            combinedVariants[selector] = new Set()
        combinedVariants[selector].add(value)
    }

    const variants = data.productById.remains.filter(
        remains => remains.remains
    ).map(remains => remains.variantStyle)
    for (let variant of variants) {
        if (variantIsValid(variant)) {
            for (let [name, value] of Object.entries(variant)) {
                let { [name]: current, ...otherSelectors } = variant
                for (let [relatedName, relatedValue] of Object.entries(otherSelectors)) {
                    addOrCreate(name, value, relatedName, relatedValue)
                }
            }
        }
    }

    const optionIsDisabled = (selector, option) => {
        if (selectedOptions[selector] && selectedOptions[selector] !== option) return true
        let { [selector]: current, ...related } = variantsData

        return !intersection(Object.entries(related).map(
            ([relatedSelector, relatedData]) => {
                if (selectedOptions[relatedSelector] === undefined) return combinedVariants[selector]
                return relatedData[selectedOptions[relatedSelector]][selector]
            }
        )).has(option)
    }

    const unfilteredSelectorsData = {}
    for (let selector of Object.keys(variantsData)) {
        unfilteredSelectorsData[selector] = [...combinedVariants[selector]].map(
            option => {
                return {
                    value: option,
                    selected: selectedOptions[selector] === option,
                    disabled: optionIsDisabled(selector, option),
                }
            }
        )
    }
    const selectorsData = Object.fromEntries(
        Object.entries(unfilteredSelectorsData).filter(
            ([selector, options]) => options.length > 1
        )
    )

    const appropriateRemains = data.productById.remains.filter(
        remains => remains.remains && Object.entries(remains.variantStyle).reduce(
            (allAppropriate, [styleName, styleValue]) =>
                allAppropriate && (
                    selectedOptions[styleName] === undefined ||
                    selectedOptions[styleName] === styleValue
                ),
            true
        )
    )

    return (
        <Row>
            <Col
                className="black-text"
                xl={6}
                m={6}
                s={12}
            >
                {Object.values(data?.productById.images).map(image =>
                    <div
                        key={image.id}
                        style={{
                            marginTop: 15,
                            boxShadow: "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)",
                            borderRadius: "2px"
                        }}>
                        <MediaBox
                            options={{
                                inDuration: 250,
                                outDuration: 200
                            }}
                        >
                            <img
                                alt="Изображение товара"
                                src={image.url}
                                width="100%"
                            />
                        </MediaBox>
                    </div>
                )}
            </Col>
            <Col
                className="white-text"
                xl={6}
                m={6}
                s={12}
                style={{
                    position: "sticky",
                    top: 0,
                    padding: "10%",
                }}
            >
                <CardPanel>
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
                </CardPanel>
            </Col>
        </Row>
    )
}

export default DetailPage
