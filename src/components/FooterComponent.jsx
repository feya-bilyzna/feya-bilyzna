import React from 'react'
import { Col, Footer, Row } from "react-materialize"
import { contactsData, categoriesData } from "../data/index"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const FooterComponent = () => {
    const { t } = useTranslation()
    return <Footer
        style={{ zIndex: 3 }}
        className={"pink accent-4"}
        copyrights={t("Нижнее белье по доступным ценам")}
        moreLinks={<NavLink
            className="white-text right"
            to={"/contacts"}
        >
            <div data-nosnippet>{t("Больше контактов")}</div>
        </NavLink>
        }
        links={
            contactsData.contacts.filter(
                contact => contact.description !== "AddressForContactsPage").map(
                    (contact, index) =>
                        <a
                            key={index}
                            href={contact.link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            {contact.svgIcon}
                        </a>
                )
        }
    >
        <Row>
            <Col xl={6} l={6} s={6}>
                <div data-nosnippet>{t("Бюстгальтеры")}:</div>
                {categoriesData.categories.bras.subcategories.map(
                    (subcategory, index) =>
                        <div data-nosnippet key={index} >
                            <NavLink style={{ color: "white" }} to={subcategory.route}>
                                {t(subcategory.name)}
                            </NavLink>
                        </div>)}
            </Col>
            <Col xl={6} l={6} s={6}>
                <div data-nosnippet>{t("Трусики")}:</div>
                {categoriesData.categories.knickers.subcategories.map(
                    (subcategory, index) =>
                        <div data-nosnippet key={index} >
                            <NavLink style={{ color: "white" }} to={subcategory.route}>
                                {t(subcategory.name)}
                            </NavLink>
                        </div>)}
            </Col>
        </Row>
    </Footer>
}

export default FooterComponent
