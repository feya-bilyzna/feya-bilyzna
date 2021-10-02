import React from 'react'
import {Button, Col, Row} from "react-materialize"
import M from "materialize-css"
import {useCookies} from "react-cookie"
import RegisterForm from "../../PersonalCabinet/RegisterForm"

const Checkout = ({ShoppingCartMutation, remainsIdsArr, removeCookie, refetch}) => {
    const [cookies] = useCookies(['user'])

    return (
        <>
            {cookies.user === undefined ? <RegisterForm/>
                :
                <>Получатель заказа {cookies.user}</>
            }
            {cookies.user !== undefined ?
                <Row>
                    <Col s={6} m={6} l={6} xl={6}>
                        <Button className="pink accent-4" node="button" waves="red" flat modal="close"
                                disabled={cookies.user === undefined}
                                style={{
                                    color: 'white',
                                    overflow: "hidden",
                                    fontSize: "min(2.5vw, 14px)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={() => {
                                    ShoppingCartMutation(
                                        {
                                            variables: {
                                                contactInfo: cookies.user === undefined ?
                                                    document.getElementById("userNameInput").value :
                                                    cookies.user,
                                                ordersList: remainsIdsArr
                                            }
                                        })
                                    removeCookie('cartProducts')
                                    M.toast({html: 'Заказ оформлен!'})
                                    refetch()
                                }
                                }
                        >
                            Подтвердить
                        </Button>
                    </Col>
                    <Col s={6} m={6} l={6} xl={6}>
                        <Button className="pink accent-4"
                                style={{
                                    color: 'white',
                                    overflow: "hidden",
                                    fontSize: "min(2.5vw, 14px)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                flat
                                modal="close"
                                node="button"
                                waves="green"
                                onClick={() => M.toast({html: 'Заказ отменён!'})}>Отмена</Button>
                    </Col>
                </Row> :
                <></>}
        </>
    )
}

export default Checkout
