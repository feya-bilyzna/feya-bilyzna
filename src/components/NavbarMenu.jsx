import React, {useState, useRef, useMemo, Fragment} from 'react'
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import {NavLink} from "react-router-dom"
import {Col, Dropdown, Icon, Navbar, Row} from "react-materialize"
import PropTypes from "prop-types"
import {categoriesData} from "../data"
import {useCookies} from "react-cookie";
import {NavbarSticky} from "../styles/navbarStyle";

Navbar.propTypes = {
    ...Navbar.propTypes,
    alignLinks: PropTypes.oneOf(['right sidenav-close']),
}

const NavbarMenu = () => {
    const [cookies] = useCookies(['cartProducts'])

    const cartSize = Object.keys(cookies.cartProducts || {}).length

    const [hideOnScroll, setHideOnScroll] = useState(true)

    useScrollPosition(
        ({prevPos, currPos}) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        false,
        false,
        300
    )

    return useMemo(() => (
        <NavbarSticky show={hideOnScroll}>
            <Navbar
                className={"pink accent-4 z-depth-2"}
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 3
                }}
                brand={
                    <>
                        <ul><NavLink className="brand-logo" to="/"
                        >
                            <Row style={{marginBottom: 0, marginRight: 20}}>
                                <Col
                                    s={12}
                                    m={6}
                                    l={6}
                                    xl={6}
                                    style={{display: "flex", justifyContent: "center"}}
                                >
                                    <Icon large style={{margin: 0}}>home</Icon>
                                </Col>
                                <div style={{overflow: "hidden"}}>
                                    <Col style={{paddingRight: 25}}
                                         s={12}
                                         m={6}
                                         l={6}
                                         xl={6}
                                    >
                                        Feya
                                    </Col>
                                </div>
                            </Row>
                        </NavLink>
                        </ul>
                        <ul><NavLink to="/cart" style={{
                            position: "absolute",
                            right: 0,
                            padding: "0 13px 0 13px"
                        }}>
                            <Icon>shopping_cart</Icon>
                            {cartSize > 0 ? <span
                                style={{color: "white", position: "absolute", top: -10, left: 34,}}
                            >
                        {cartSize}
                </span> : <></>}
                        </NavLink></ul>
                    </>
                }
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                alignLinks='right sidenav-close'
                sidenav={
                    <>
                        <NavLink to="/">
                            <div className="background">
                                <img style={{width: "100%"}} alt="Логотип"
                                     src="https://bn1301files.storage.live.com/y4moe3hVn4paJgAFL1jDAEl3VyJrCawq4hIPSPdmDwHMpMKqa85lvHgqVnezDlNAICbnSeMxOK1eMR2As3uVkDEi8IfzhphnGhcdOqSE_ecGzisHPFLus1GgFdzzwej_e-yTbWHfAucXe7Qfo1mj9SPjYALn8vYrSWUWBbAeHIQ8UugG-6QoXAuWPrB6y9NT4aa?width=256&height=256&cropmode=none"/>
                            </div>
                        </NavLink>
                        {Object.values(categoriesData.categories).map(categoryData =>
                            <li key={categoryData.route}>
                                <NavLink to={categoryData.route}>{categoryData.name}</NavLink>
                            </li>
                        )}
                        {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                            <li key={subcategoryData.route}>
                                <NavLink to={subcategoryData.route}>{subcategoryData.name}</NavLink>
                            </li>
                        )}
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                    </>
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

                    trigger={<a href="#!">Все товары{' '}</a>}
                >
                    {Object.values(categoriesData.categories).map(categoryData =>
                        <NavLink key={categoryData.route} to={categoryData.route}>
                            {categoryData.name}
                        </NavLink>
                    )}
                    {Object.values(categoriesData.uncategorizedSubcategories).map(subcategoryData =>
                        <NavLink key={subcategoryData.route} to={subcategoryData.route}>
                            {subcategoryData.name}
                        </NavLink>
                    )}
                </Dropdown>
                <NavLink to="/contacts">Контакты</NavLink>
                <div style={{marginRight: 50}}/>
            </Navbar>
        </NavbarSticky>
    ), [hideOnScroll])
}

export default NavbarMenu
