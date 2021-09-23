import React, {Fragment} from 'react'
import {
    Button,
    Col,
    Collapsible,
    CollapsibleItem,
    Divider,
    Icon,
    Modal,
    Row,
    TextInput,
    Toast
} from "react-materialize";
import {gql, useQuery, useMutation} from "@apollo/client";
import {useCookies} from 'react-cookie'
import {LoadingAnimation, ImageView} from "..";
import {alertsData} from "../../data";
import {NavLink} from "react-router-dom";
import M from "materialize-css"
import contactsData from "../../data/contactsData";

const CartCell = ({size, children, bold}) => {
    return <Col s={size} m={size} l={size} xl={size} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: bold ? "bold" : "normal",
        fontSize: "min(2.5vw, 14px)",
    }}>{children}</Col>
}

const ShoppingCart = () => {
    const ShoppingCartQuery = gql`
    query ShoppingCartQuery($ids: [Int]!) {
        productsByIds(ids: $ids) {
            id
            images {
                url
            }
            remains {
                id
                price
                variantId
                variantName
                remains
            }
        }
        orderByContactinfo(contactInfo: "admin") {
                        processed
            positions {
              amount
              productremains {
                id
                variantName
                price
              }
              product {
                images {
                  url
                }
                id
              }
            }
          }
    }`

    const Shopping_Cart_Mutation = gql`
    mutation ShoppingCartMutation($contactInfo: String!, $ordersList: [OrderItem]!){
        __typename
            makeOrder(contactInfo: $contactInfo, ordersList: $ordersList) {
        result
      }
    }`

    const [cookies, setCookie, removeCookie] = useCookies(['cartProducts'])

    const [ShoppingCartMutation, {dataMutation, loadingMutation, errorMutation}] = useMutation(Shopping_Cart_Mutation)

    const userName = "admin"

    const deleteOrder = (remainsId) => {
        if (!window.confirm("Вы уверены, что хотите убрать данный товар из корзины?")) return
        const {[remainsId]: deleted, ...otherProducts} = cookies.cartProducts

        if (Object.keys(otherProducts).length)
            setCookie('cartProducts', otherProducts)
        else
            removeCookie('cartProducts')
    }

    const {loading, error, data} = useQuery(ShoppingCartQuery, {
        variables: {
            ids: cookies.cartProducts ?
                Object.values(cookies.cartProducts).map(variantData => variantData.productId) : [],
            contactInfo: userName
        },
    })

    const cartHeader = <h3 style={{textAlign: "center"}}>Корзина</h3>
    const cartOrder = <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}><Icon small>arrow_drop_down</Icon></div>
        <h6 style={{textAlign: "center"}}>У вас есть необработанный заказ</h6>
    </>

    if (cookies.cartProducts === undefined) return <>
        {cartHeader}
        <div style={{textAlign: "center"}}><h5>{alertsData.cartIsEmpty}</h5>
            <Row style={{paddingTop: 10}}>
                <NavLink to={'/'}>
                    <Button
                        className="pink accent-4"
                        node="button"
                        waves="red"
                        style={{
                            color: 'white',
                            overflow: "hidden",
                            fontSize: "min(2.5vw, 14px)",
                        }}
                    >
                        <Icon left>arrow_back</Icon>
                        К покупкам
                    </Button>
                </NavLink>
            </Row>
        </div>
    </>

    if (loading) return <>
        {cartHeader}
        <LoadingAnimation style={{height: "50vh"}}/>
    </>
    if (error) return <>
        {cartHeader}
        <h5 style={{textAlign: "center"}}>{alertsData.serverRequestFailed}</h5>
    </>

    const fullPrice = Object.values(cookies.cartProducts || {}).reduce(
        (totalPrice, orderPosition) => totalPrice + orderPosition.price * orderPosition.amount, 0
    )

    const products = Object.fromEntries(data.productsByIds.map(product => [product.id, product]))

    const getUniqRemainIds = () => {
        const uniqRemainIds = (Object.values(data.orderByContactinfo.positions).map(
            orderProduct => {
                return {
                    remainsId: orderProduct.productremains.id,
                    amount: orderProduct.amount
                }
            }
        )).concat(Object.entries(cookies.cartProducts).map(
            ([remainsId, data]) => {
                return {
                    remainsId: remainsId, amount: data.amount
                }
            }
            )
        )

        let foo = new Map();
        for (const tag of uniqRemainIds) {
            foo.set(tag.remainsId, tag);
        }
        let final = [...foo.values()]

        return final
    }

    const remainsIdsArr = getUniqRemainIds()

    return <>
        {cartHeader}
        <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
            <CartCell size={2}>
                <Button
                    small
                    tooltip="Очистить корзину"
                    tooltipOptions={{
                        position: 'top'
                    }}
                    className="red"
                    floating
                    icon={<Icon>delete_sweep</Icon>}
                    node="button"
                    waves="light"
                    onClick={() => window.confirm(
                        "Вы уверены, что хотите очистить корзину от всех товаров?"
                    ) && removeCookie('cartProducts')}
                />
            </CartCell>
            <CartCell size={3} bold>Товар</CartCell>
            <CartCell size={2} bold>Вариант</CartCell>
            <CartCell size={3} bold>Количество</CartCell>
            <CartCell size={2} bold>Цена</CartCell>
        </Row>
        <Divider/>

        {Object.entries(cookies.cartProducts).map(([remainsId, purchaseData], index) => {
            const productData = products[purchaseData.productId]
            const remainsData = productData.remains.find(remain => remain.id === remainsId)

            const changeOrderAmount = (amountChange) => setCookie(
                'cartProducts',
                {
                    ...(cookies.cartProducts || {}),
                    [remainsId]: {...purchaseData, amount: purchaseData.amount + amountChange}
                }
            )

            return <Fragment key={index}>
                <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
                    <CartCell size={2}>
                        <Button
                            small
                            tooltip="Удалить из корзины"
                            tooltipOptions={{
                                position: 'top'
                            }}
                            className="red"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            node="button"
                            waves="light"
                            onClick={() => deleteOrder(remainsId)}
                        />
                    </CartCell>
                    <CartCell size={3}>
                        <NavLink to={`/${productData.id}`} style={{width: "100%"}}>
                            <ImageView image={productData.images[0]?.url} />
                        </NavLink>
                    </CartCell>
                    <CartCell size={2}>{remainsData.variantName}</CartCell>
                    <CartCell size={3}>
                        <Button flat node="button"
                                className="red lighten-2"
                                waves="light"
                                onClick={() => changeOrderAmount(-1)}
                                disabled={purchaseData.amount <= 1}
                                small
                                floating
                                style={{
                                    width: 18,
                                    height: 18,
                                    lineHeight: "18px",
                                    color: "white",
                                    margin: 5,
                                }}
                        >-</Button>
                        {purchaseData.amount}
                        <Button flat node="button"
                                className="red lighten-2"
                                waves="light"
                                onClick={() => changeOrderAmount(1)}
                                disabled={purchaseData.amount >= remainsData.remains}
                                small
                                floating
                                style={{
                                    width: 18,
                                    height: 18,
                                    lineHeight: "18px",
                                    color: "white",
                                    margin: 5,
                                }}
                        >+</Button>
                    </CartCell>
                    <CartCell size={2} bold>{remainsData.price * purchaseData.amount} грн</CartCell>
                </Row>
                <Divider/>
            </Fragment>
        })}

        {data.orderByContactinfo != null ? <Collapsible
            accordion
            popout
        >
            <CollapsibleItem
                expanded={false}
                header={cartOrder}
                node="div"
                style={{background: "white"}}
            >
                {Object.values(data.orderByContactinfo.positions).map((orderProduct, index) => <Fragment
                        key={index}>
                        <Row style={{display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5}}>
                            <CartCell size={2}>
                                {index + 1}
                            </CartCell>
                            <CartCell size={3}>
                                <NavLink to={`/${orderProduct.product.id}`} style={{width: "100%"}}>
                                    <ImageView image={orderProduct.product.images[0]?.url}/>
                                </NavLink>
                            </CartCell>
                            <CartCell size={2}>{orderProduct.productremains.variantName}</CartCell>
                            <CartCell size={3}>
                                {orderProduct.amount}
                            </CartCell>
                            <CartCell size={2} bold>{orderProduct.productremains.price} грн</CartCell>
                        </Row>
                        <Divider/>
                    </Fragment>
                )}
            </CollapsibleItem>
        </Collapsible> : <></>}

        <Row style={{textAlign: "right", marginTop: 10, paddingRight: "3rem"}}><b
            className="flow-text">Итого: {fullPrice} грн</b></Row>
        <Row>
            <Col s={6} m={6} l={6} xl={6}>
                <NavLink to={'/'} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button
                        className="pink accent-4"
                        node="button"
                        waves="red"
                        style={{
                            color: 'white',
                            overflow: "hidden",
                            fontSize: "min(2.5vw, 14px)",
                        }}
                    >
                        <Icon left>arrow_back</Icon>
                        К покупкам
                    </Button>
                </NavLink>
            </Col>
            <Col s={6} m={6} l={6} xl={6}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Modal
                        actions={[]}
                        bottomSheet={false}
                        header="Оформление заказа"
                        id="Modal-12"
                        open={false}
                        options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                        }}
                        trigger={<Button className="pink accent-4"
                                         node="button"
                                         waves="red"
                                         style={{
                                             color: 'white',
                                             overflow: "hidden",
                                             fontSize: "min(2.5vw, 14px)",
                                         }}
                        >
                            Оформить заказ
                        </Button>}
                    >
                        Получатель заказа
                        <TextInput id="userNameInput"
                                   label="Введите ваш номер телефона или имя"
                        />
                        <TextInput id="TextInput-74"
                                   label="ФИО"
                        />
                        <TextInput id="TextInput-75"
                                   label="Город"
                        />
                        <TextInput id="TextInput-76"
                                   label="Отделение НП"
                        />
                        <Toast className="transparent"
                               options={{
                                   html: 'Заказ оформлен!'
                               }}
                        >
                            <Button className="pink accent-4"
                                    node="button"
                                    waves="red"
                                    flat modal="close"
                                    style={{
                                        color: 'white',
                                        overflow: "hidden",
                                        fontSize: "min(2.5vw, 14px)",
                                    }}
                                    onClick={() => {
                                        ShoppingCartMutation(
                                            {
                                                variables: {
                                                    contactInfo: document.getElementById("userNameInput").value,
                                                    ordersList: remainsIdsArr
                                                }
                                            })
                                        removeCookie('cartProducts')
                                    }
                                    }
                            >
                                Подтвердить заказ
                            </Button>
                        </Toast>
                        <Toast className="transparent"
                               options={{
                                   html: 'Заказ не оформлен!'
                               }}
                        >
                            <Button className="pink accent-4" style={{
                                color: 'white',
                                overflow: "hidden",
                                fontSize: "min(2.5vw, 14px)",
                            }} flat modal="close" node="button" waves="green">Отмена</Button>
                        </Toast>
                    </Modal>
                </div>
            </Col>
        </Row>
    </>
}

export default ShoppingCart
