import React from 'react';
import {Button, Col, Row, TextInput} from "react-materialize";
import M from "materialize-css";

const Checkout = ({ShoppingCartMutation, remainsIdsArr, removeCookie}) => {
    return (
        <>
            Получатель заказа
            <TextInput id="userNameInput" label="Введите ваш номер телефона или имя"/>
            <TextInput id="TextInput-74" label="ФИО"/>
            <TextInput id="TextInput-75" label="Город"/>
            <TextInput id="TextInput-76" label="Отделение НП"/>
            <Row>
                <Col s={6} m={6} l={6} xl={6}>
                    <Button className="pink accent-4" node="button" waves="red" flat modal="close"
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
                                            contactInfo: document.getElementById("userNameInput").value,
                                            ordersList: remainsIdsArr
                                        }
                                    })
                                removeCookie('cartProducts')
                                M.toast({html: 'Заказ оформлен!'})
                            }
                            }
                    >
                        Подтвердить
                    </Button></Col>

                <Col s={6} m={6} l={6} xl={6}><Button className="pink accent-4" style={{
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
                  onClick={() => M.toast({html: 'Заказ отменён!'})}>Отмена</Button></Col>
            </Row>
        </>
    );
};

export default Checkout;