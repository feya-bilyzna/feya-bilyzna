import React, { Fragment } from 'react'
import {
    Divider,
    Row,
    Collapsible,
    CollapsibleItem,
} from "react-materialize"
import { ImageView, CustomIcon } from "../.."
import { CartCell } from '.'
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const PendingOrder = ({ orderItems }) => {
    const { t } = useTranslation()
    const fullPrice = orderItems.reduce(
        (totalPrice, orderPosition) => totalPrice + orderPosition.productremains.price * orderPosition.amount, 0
    )

    return <Collapsible accordion popout style={{ margin: 4 }}>
        <CollapsibleItem
            expanded={false}
            header={<>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CustomIcon small>arrow_drop_down</CustomIcon>
                </div>
                <h6 style={{ textAlign: "center" }}>{t("У вас есть необработанный заказ")}</h6>
            </>}
            node="div"
            style={{ background: "white" }}
        >
            {orderItems.map((orderProduct, index) =>
                <Fragment key={index}>
                    <Row style={{ display: "flex", flexWrap: "wrap", marginBottom: 5, marginTop: 5 }}>
                        <CartCell size={2}>
                            {index + 1}
                        </CartCell>
                        <CartCell size={3}>
                            <NavLink to={`/${orderProduct.product.id}`} style={{ width: "100%" }}>
                                <ImageView image={orderProduct.product.images[0]?.url} />
                            </NavLink>
                        </CartCell>
                        <CartCell size={2}>{orderProduct.productremains.variantName}</CartCell>
                        <CartCell size={3}>
                            {orderProduct.amount}
                        </CartCell>
                        <CartCell size={2} bold>{orderProduct.productremains.price} грн</CartCell>
                    </Row>
                    <Divider />
                </Fragment>
            )}
            <Row style={{ textAlign: "right", marginTop: 10, paddingRight: "3rem" }}>
                <b className="flow-text">{t("Итого")}: {fullPrice} {t("грн")}</b>
            </Row>
        </CollapsibleItem>
    </Collapsible>
}

export default PendingOrder
