import React from 'react'
import { NavLink } from "react-router-dom"
import { Col, Dropdown, Navbar, Row } from "react-materialize"
import PropTypes from "prop-types"
import { categoriesData } from "../data"
import { CustomIcon, LoginButton, LanguageSelector } from "./index";
import { useCookies } from "react-cookie";
import styles from "../css.module/navbar.module.css"
import dropDownStyle from "../css.module/dropDown.module.css"
import cx from "classnames";
import { useTranslation } from "react-i18next"
import packageJSON from "../../package.json"

Navbar.propTypes = {
    ...Navbar.propTypes,
    alignLinks: PropTypes.oneOf(['right sidenav-close']),
}

const NavbarMenu = () => {
    const [cookies] = useCookies(['cartProducts'])
    const { t } = useTranslation()

    const cartSize = Object.keys(cookies.cartProducts || {}).length

    const divider = { margin: 0, border: "solid", borderWidth: "0.01em", borderColor: "rgb(224,224,224)" }

    return <Navbar style={{ zIndex: 3 }}

        className={"pink accent-4"}
        brand={
            <>
                <NavLink className={cx("brand-logo", styles.navElement)} to="/"
                >
                    <Row style={{ marginBottom: 0, marginRight: 20 }}>
                        <Col
                            s={12}
                            m={6}
                            l={6}
                            xl={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CustomIcon large style={{ margin: 0 }}>home</CustomIcon>
                        </Col>
                        <div className='notranslate' style={{ overflow: "hidden" }}>
                            <Col style={{ paddingRight: 25 }}
                                s={12}
                                m={6}
                                l={6}
                                xl={6}
                            >
                                <span style={{ fontFamily: "boyarskycregular", marginRight: 25, marginLeft: -10 }}>Feya</span>
                            </Col>
                        </div>
                    </Row>
                </NavLink>
                <NavLink className={styles.navElement} to="/cart" style={{
                    position: "absolute",
                    right: 0,
                    padding: "0 13px 0 13px"
                }}>
                    <CustomIcon>shopping_cart</CustomIcon>
                    {cartSize > 0 ? <span
                        style={{ color: "white", position: "absolute", top: -10, left: 34, }}
                    >
                        {cartSize}
                    </span> : <></>}
                </NavLink>
            </>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<CustomIcon>menu</CustomIcon>}
        alignLinks='right sidenav-close'
        sidenav={
            <div data-nosnippet className='pink accent-4'>
                <NavLink to="/">
                    <div className="background">
                        <img style={{ width: "100%" }} alt="Логотип" src={`${packageJSON.homepage}/images/sideNavLogo.webp`} />
                    </div>
                </NavLink>
                <LoginButton sideNav={true} />
                <hr style={divider} />
                <ul>
                    {Object.values(categoriesData.categories).map(categoryData =>
                        <li key={categoryData.route}>
                            <NavLink className="white-text" to={categoryData.route}><div data-nosnippet>{t(categoryData.name)}</div></NavLink>
                            <hr style={divider} />
                        </li>
                    )}
                    {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                        <li key={subcategoryData.route}>
                            <NavLink className='white-text' to={subcategoryData.route}><div data-nosnippet>{t(subcategoryData.name)}</div></NavLink>
                            <hr style={divider} />
                        </li>
                    )}
                    <li><NavLink className='white-text' to="/contacts"><div data-nosnippet>{t("Контакты")}</div></NavLink></li>
                </ul>
            </div>
        }
        options={{
            draggable: false,
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
            closeOnClick: true,
        }}
    >
        <Dropdown
            options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: false,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250,
            }}
            trigger={<a style={{ display: "flex" }} href="#!">
                <CustomIcon style={{ marginRight: 20 }}>arrow_drop_down</CustomIcon>
                <div data-nosnippet>{t("Все товары")}</div>
            </a>}
        >
            {Object.values(categoriesData.categories).map(categoryData =>
                <NavLink key={categoryData.name} className={cx(dropDownStyle.dropDown, "white-text")}
                    to={categoryData.route}>
                    <div data-nosnippet>•{t(categoryData.name)}</div>
                </NavLink>
            )}
            {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                <NavLink key={subcategoryData.name} className={cx(dropDownStyle.dropDown, "white-text")}
                    to={subcategoryData.route}>
                    <div data-nosnippet>•{t(subcategoryData.name)}</div>
                </NavLink>
            )}
        </Dropdown>
        <NavLink style={{ display: "flex" }} to="/contacts">
            <CustomIcon style={{ marginRight: 20 }}>phone_in_talk</CustomIcon>
            <div data-nosnippet>{t("Контакты")}</div>
        </NavLink>
        <LanguageSelector />
        <LoginButton cardButton={false} />
        <div style={{ marginRight: 50 }} />
    </Navbar>
}

export default NavbarMenu
