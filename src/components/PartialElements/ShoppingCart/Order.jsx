import React, {Fragment} from 'react'
import {Collapsible, CollapsibleItem, Divider, Row} from "react-materialize"
import {CartCell, CustomIcon, ImageView} from "../../index"
import {NavLink} from "react-router-dom"

const Order = ({data}) => {
    const fullPrice = data !==null ? Object.values(data.positions || {}).reduce(
        (totalPrice, orderPosition) => totalPrice + orderPosition.productremains.price * orderPosition.amount, 0
    ): 0

    const cartOrder = <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}><CustomIcon small>arrow_drop_down</CustomIcon></div>
        <h6 style={{textAlign: "center"}}>
            {data!==null?"У вас есть необработанный заказ":"У вас нет необработанного заказа"}
        </h6>
    </>

    return <Collapsible
        accordion
        popout
        style={{margin:4}}
    >
        <CollapsibleItem
            expanded={false}
            header={cartOrder}
            node="div"
            style={{background: "white"}}
        >
            {data!==null ? Object.values(data.positions).map((orderProduct, index) => <Fragment
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
                    {index===data.positions.length-1? <Row style={{textAlign: "right", marginTop: 10, paddingRight: "3rem"}}><b
                        className="flow-text">Итого: {fullPrice} грн</b></Row>:<></>}
                </Fragment>
            ):<></>}
        </CollapsibleItem>
    </Collapsible>
}

export default Order
