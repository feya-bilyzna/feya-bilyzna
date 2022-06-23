import React, { Fragment, useState } from 'react'
import { Button, Col, Divider, MediaBox, Modal, Row } from "react-materialize"
import { useParams } from 'react-router'
import { gql, useQuery } from "@apollo/client"
import { useCookies } from 'react-cookie'
import { LoadingAnimation, VariantSelectors, AdditionalInfo, ProductInfoModal, CustomIcon, SizeTable } from '..'
import { alertsData, cartAndOrderLimits, categoriesData, sizeTableData } from "../../data/index"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import WishlistButton from '../PartialElements/WishlistButton'

const DetailPage = () => {

    const { t } = useTranslation()
    const descriptionStyle = { fontSize: 13, marginBottom: 10 }
    const modalMarginBottom = { marginBottom: "90px" }

    const ProductQuery = gql`
    query ProductQuery($id: Int!) {
        productById(id: $id) {
                categories
                description
                id
                images
                name
                remains {
                  id
                  price
                  variantId
                  variantName
                  variantStyle
                  remains
                }
                brandName
                vendorCode
              }
            }
    `

    const [selectedOptions, setselectedOptions] = useState({})
    const { productId } = useParams()

    const [cookies, setCookie] = useCookies(['cartProducts', 'wishlist'])

    const { loading, error, data } = useQuery(ProductQuery, {
        variables: { id: productId },
    })

    if (loading) return <LoadingAnimation style={{ height: "50vh" }} />
    if (error) return <h5 style={{ textAlign: "center" }}>{t(alertsData.serverRequestFailed)}</h5>
    if (data.productById === null)
        return <h5 style={{ textAlign: "center", margin: 30 }}>
            {t(alertsData.noSuchId)}
        </h5>

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

    const validRemains = data.productById.remains.filter(
        remains =>
            // Atleast 1 piece available
            remains.remains &&
            // Only has allowed selectors
            variantIsValid(remains.variantStyle)
    )

    const appropriateRemains = validRemains.filter(
        remains =>
            // Conflicting variant is not yet selected
            Object.entries(remains.variantStyle).reduce(
                (allAppropriate, [styleName, styleValue]) =>
                    allAppropriate && (
                        selectedOptions[styleName] === undefined ||
                        selectedOptions[styleName] === styleValue
                    ),
                true
            )
    )

    const appropriateOptions = appropriateRemains.reduce(
        (data, remains) => {
            Object.entries(remains.variantStyle).forEach(([styleName, styleValue]) => {
                if (!data[styleName]) data[styleName] = new Set()
                data[styleName].add(styleValue)
            })
            return data
        }, {}
    )

    const encounteredOptions = {}
    const selectorsData = validRemains.reduce(
        (data, remains) => {
            Object.entries(remains.variantStyle).forEach(([styleName, styleValue]) => {
                if (!data[styleName]) {
                    data[styleName] = []
                    encounteredOptions[styleName] = new Set()
                }
                if (!encounteredOptions[styleName].has(styleValue)) {
                    data[styleName].push({
                        value: styleValue,
                        selected: selectedOptions[styleName] === styleValue,
                        disabled: !appropriateOptions[styleName].has(styleValue),
                    })
                    encounteredOptions[styleName].add(styleValue)
                }
            })
            return data
        }, {}
    )

    Object.values(selectorsData).forEach(options => options.sort(
        (option1, option2) => {
            const sortOption1 = parseInt(option1.value) || option1.value
            const sortOption2 = parseInt(option2.value) || option2.value
            return sortOption1 > sortOption2 ? 1 : -1
        }
    ))

    if (!appropriateRemains.length)
        return <>
            <h5 style={{ textAlign: "center", margin: 30 }}>
                {t(alertsData.invalidRemains)}
            </h5>
            <div style={{ textAlign: "center" }}>
                <NavLink to={"/contacts"}><Button
                    className="red"
                    node="button"
                >{t("Контакты")}</Button></NavLink></div>
        </>

    const tooMuchItemsInCart = cookies.cartProducts && Object.keys(cookies.cartProducts).length >= cartAndOrderLimits

    const addToCart = (remainId, variantId, price) => !tooMuchItemsInCart && setCookie('cartProducts',
        { ...(cookies.cartProducts || {}), [remainId]: { productId, variantId, amount: 1, price } }
    )

    const productAlreadyAdded =
        appropriateRemains.length === 1 && appropriateRemains[0].id in (cookies.cartProducts || {})


    const productCategories = new Set(data?.productById.categories)
    const categoryIsValid = category => productCategories.has(category.name)
    const parentCategories = [
        ...Object.values(categoriesData.uncategorizedSubcategories).filter(categoryIsValid),
        ...Object.values(categoriesData.categories).reduce(
            (categoryArray, category) => categoryArray.concat(
                Object.values(category.subcategories).filter(categoryIsValid)
            ), []
        ),
    ]

    const sizeTable = sizeTableData[parentCategories.find(category => category.sizeTable)?.sizeTable]

    const wishlist = new Set(Object.values(cookies.wishlist || []))

    return <Row className={"flow-text"}>
        <Col className="black-text" xl={6} m={6} s={12}>
            {
                parentCategories.map(({ route, name }) => <Fragment key={route}>
                    {
                        <NavLink to={route}>
                            <Button className="pink accent-4"
                                style={{ marginTop: 13, marginRight: 13 }}
                            >
                                <CustomIcon left>
                                    arrow_back_ios
                                </CustomIcon>{t(name)}</Button>
                        </NavLink>
                    }
                </Fragment>)
            }
            {Object.values(data?.productById.images).map((image, index) =>
                <div
                    className="z-depth-1-half"
                    key={index}
                    style={{
                        marginTop: 15,
                        borderRadius: "2px"
                    }}>
                    <MediaBox
                        options={{
                            inDuration: 250,
                            outDuration: 200
                        }}
                    >
                        <img
                            alt={t("Изображение")}
                            src={image}
                            width="100%"
                        />
                    </MediaBox>
                </div>
            )}
        </Col>
        <Col xl={6} m={6} s={12}
            style={{
                position: "sticky",
                top: 0,
                padding: "0.5% 3% 0",
            }}
        >
            <Row style={{ marginBottom: 10, marginTop: 10 }}>
                <Col className="black-text">
                    {data?.productById.vendorCode}
                </Col>
            </Row><Divider />
            <Row style={{ marginBottom: 10, marginTop: 10 }}>
                <Col className="black-text">
                    {data?.productById.brandName ? data?.productById.brandName : t("Бренд не указан")}
                </Col>
            </Row><Divider />
            {validRemains.length > 1 ? <Row>
                <Col>
                    <VariantSelectors selectorsData={selectorsData} updateSelector={updateSelector} />
                </Col>
            </Row> : <></>}
            {appropriateRemains.length === 1 ? <div>
                <AdditionalInfo header={t("Выбранный вариант")}>
                    <p style={descriptionStyle}>{appropriateRemains[0].variantName}</p>
                    <p style={descriptionStyle}>{t("В наличии")} {appropriateRemains[0].remains} {t("шт")}</p>
                </AdditionalInfo>
            </div> : <></>}
            <Row>
                <Col className="pink-text accent-4">
                    <h3 style={{ fontWeight: "bold", margin: 0 }}>{appropriateRemains[0].price} {t("грн")}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="black-text" s={6}>
                    <Modal style={modalMarginBottom}
                        actions={[
                            <div style={{ textAlign: "center" }}>
                                <NavLink to="/cart">
                                    <Button
                                        modal="close"
                                        className="pink accent-4"
                                        node="button"
                                        flat={true}
                                        waves="red"
                                        style={{
                                            color: 'white'
                                        }}
                                    >
                                        <Row>
                                            <Col style={{ marginLeft: 39 }}>
                                                {t("Да")}
                                            </Col>
                                            <Col>
                                                <CustomIcon tiny>shopping_cart</CustomIcon>
                                            </Col>
                                        </Row>
                                    </Button>
                                </NavLink>
                                <Button
                                    modal="close"
                                    className="pink accent-4"
                                    node="button"
                                    flat={true}
                                    waves="red"
                                    style={{ margin: 5, color: 'white' }}
                                >
                                    <Row>
                                        <Col>{t("Продолжить")}</Col>
                                    </Row>
                                </Button>
                            </div>
                        ]}
                        bottomSheet
                        trigger={<Button className="red"
                            disabled={appropriateRemains.length > 1
                                ||
                                appropriateRemains[0].id in (cookies.cartProducts || {})
                            }
                            node="button"
                            style={{ padding: 0 }}
                        >
                            <div style={{ padding: "0 20px 0 20px" }}
                                onClick={() => addToCart(appropriateRemains[0].id,
                                    appropriateRemains[0].variantId,
                                    appropriateRemains[0].price
                                )}>
                                {t(productAlreadyAdded ? "Добавлено" : "Купить")}
                                {!productAlreadyAdded ? <CustomIcon tiny right>attach_money</CustomIcon> : <></>}
                            </div>
                        </Button>}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h5>{tooMuchItemsInCart ? t(alertsData.cartIsFull) : t("Добавлено в корзину!")}</h5>
                            <h6>{t("Перейти к оформлению заказа?")}</h6>
                        </div>
                    </Modal>
                </Col>
                <Col className="black-text" s={6}>
                    <WishlistButton id={productId} wishlist={wishlist} />
                </Col>
            </Row>
            {<AdditionalInfo header={t("О товаре")}>
                {data?.productById.description ?
                    <div style={descriptionStyle}>{
                        data?.productById.description.split('⚡').map(sentence =>
                            <p key={sentence} style={{ marginBottom: 0, marginTop: 0 }}>
                                {sentence}
                            </p>)
                    }</div> : <></>}
                <ProductInfoModal name={t("Доставка")} iconName="local_shipping">
                    <div style={{ textAlign: "center" }}>
                        <h6>{t("Новой почтой по Украине - по тарифам перевозчика.")}</h6>
                        <h6>{t("Укрпочтой по Украине - по тарифам перевозчика.")}</h6>
                    </div>
                </ProductInfoModal>
                <ProductInfoModal name={t("Оплата")} iconName="local_atm">
                    <div style={{ textAlign: "center" }}>
                        <h6>{t("Наложенным платежом.")}</h6>
                        <h6>{t("Оплата на месте (наличные, терминал).")}</h6>
                        <h6>{t("На карту ПриватБанка.")}</h6>
                    </div>
                </ProductInfoModal>
                {
                    sizeTable ?
                        <ProductInfoModal name={t("Таблица размеров")} iconName="table_rows">
                            <div style={{ textAlign: "center" }}>
                                <SizeTable table={sizeTable} />
                            </div>
                        </ProductInfoModal> :
                        <></>
                }
            </AdditionalInfo>}
        </Col>
    </Row>
}

export default DetailPage
