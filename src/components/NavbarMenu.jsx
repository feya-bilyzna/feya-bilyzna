import React from 'react'
import {NavLink} from "react-router-dom"
import {Col, Dropdown, Navbar, Row} from "react-materialize"
import PropTypes from "prop-types"
import {categoriesData} from "../data"
import {CustomIcon, LoginButton} from "./index";

Navbar.propTypes = {
    ...Navbar.propTypes,
    alignLinks: PropTypes.oneOf(['right sidenav-close']),
}

const NavbarMenu = () => {

    return <Navbar
        className={"pink accent-4"}
        brand={
            <><NavLink className="brand-logo" to="/"
            >
                <Row>
                    <Col
                        s={12}
                        m={6}
                        l={6}
                        xl={6}
                        style={{display: "flex", justifyContent: "center"}}
                    >
                        <CustomIcon large style={{margin: 0}}>home</CustomIcon>
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
            <NavLink to="/cart" style={{ position: "absolute", right: 20 }}>
                <CustomIcon>shopping_cart</CustomIcon>
            </NavLink></>}
        centerChildren
        id="mobile-nav"
        menuIcon={<CustomIcon>menu</CustomIcon>}
        alignLinks='right sidenav-close'
        sidenav={
            <>
                <NavLink to="/">
                    <div className="background">
                        <img style={{width: "100%"}} alt="Логотип" src="https://bn1301files.storage.live.com/y4moe3hVn4paJgAFL1jDAEl3VyJrCawq4hIPSPdmDwHMpMKqa85lvHgqVnezDlNAICbnSeMxOK1eMR2As3uVkDEi8IfzhphnGhcdOqSE_ecGzisHPFLus1GgFdzzwej_e-yTbWHfAucXe7Qfo1mj9SPjYALn8vYrSWUWBbAeHIQ8UugG-6QoXAuWPrB6y9NT4aa?width=256&height=256&cropmode=none"/>
                    </div>
                </NavLink>
                <li><LoginButton sideNav={true}/></li>
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
        <LoginButton cardButton={false}/>
        <div style={{ marginRight: 50 }} />
    </Navbar>
}

export default NavbarMenu
