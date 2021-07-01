import React from 'react';
import {NavLink} from "react-router-dom";
import {Divider, Dropdown, Icon, Navbar, NavItem, Tab, Tabs} from "react-materialize"

export let NavbarMenu = (props) => {

    return(
       <>
           <Navbar
               brand={<a className="brand-logo" href="#">Logo</a>}
               centerChildren
               id="mobile-nav"
               menuIcon={<Icon>menu</Icon>}
               alignLinks='right sidenav-close'
               sidenav={
                   <>
                       <li><NavLink to="/brands">Бренды</NavLink></li>
                       <li><NavLink to="/bras">Бюстгальтеры</NavLink></li>
                       <li><NavLink to="/knickers">Трусики</NavLink></li>
                       <li><NavLink to="/sale">Распродажа</NavLink></li>
                       <li><NavLink to="/shapewear">Корректирующее бельё</NavLink></li>
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
                       hover: true,
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
