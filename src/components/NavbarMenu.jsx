import React from 'react';
import {NavLink} from "react-router-dom";
import {Dropdown, Icon, Navbar} from "react-materialize"
import PagesList from "../data/pagesList";
import PropTypes from "prop-types";

Navbar.propTypes = {
    ...Navbar.propTypes,
    alignLinks: PropTypes.oneOf(['right sidenav-close']),
}

export let NavbarMenu = () => {

    return (
        <>
            <Navbar
                brand={<a className="brand-logo" href="/">Logo</a>}
                centerChildren
                id="mobile-nav"

                menuIcon={<Icon>menu</Icon>}

                alignLinks='right sidenav-close'
                sidenav={
                    <>
                        {PagesList.map(p => {
                                return (
                                    <li key={p.route}><NavLink to={p.route}>{p.menuItem}</NavLink></li>
                                )
                            }
                        )}
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                    </>
                }
                options={{
                    draggable: true,
                    edge: 'left',
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
                    id="Dropdown_6"
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
                    {PagesList.map(p => {
                            return (
                                <NavLink key={p.route} to={p.route}>{p.menuItem}</NavLink>
                            )
                        }
                    )}
                </Dropdown>
                <NavLink to="/contacts">Контакты</NavLink>
            </Navbar>
        </>
    )
}
