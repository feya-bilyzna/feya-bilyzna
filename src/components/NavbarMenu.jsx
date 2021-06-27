import React from 'react';
import {NavLink} from "react-router-dom";
import {Divider, Dropdown, Icon, Navbar, NavItem, Tab, Tabs} from "react-materialize"

export let NavbarMenu = (props) => {

    return(
       <>
           <Navbar
               alignLinks="right"
               brand={<a className="brand-logo" href="#">Logo</a>}
               centerChildren
               id="mobile-nav"
               menuIcon={<Icon>menu</Icon>}
               options={{
                   draggable: true,
                   edge: 'left',
                   inDuration: 250,
                   onCloseEnd: null,
                   onCloseStart: null,
                   onOpenEnd: null,
                   onOpenStart: null,
                   outDuration: 200,
                   preventScrolling: true
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

                   trigger={<a href="#!">Все товары{' '}<Icon right></Icon></a>}
               >
                    <NavLink to="/brands">Бренды</NavLink>
                    <NavLink to="/bras">Бюстгальтеры</NavLink>
                    <NavLink to="/knickers">Трусики</NavLink>
                    <NavLink to="/sale">Распродажа</NavLink>
                    <NavLink to="/shapewear">Корректирующее бельё</NavLink>
               </Dropdown>
               <NavLink to="/contacts">Контакты</NavLink>
           </Navbar>
       </>
    )
}
