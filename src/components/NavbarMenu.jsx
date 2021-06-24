import React from 'react';
import {NavLink} from "react-router-dom";
import {Contacts} from "./Main/Contacts";
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
                   {/*<li><NavLink to="/">Main Page</NavLink></li>*/}
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

                   {/*<a href="#">*/}
                   {/*    Бюстгальтеры*/}
                   {/*</a>*/}
                   <li><NavLink to="/brands">Бренды</NavLink></li>
                   <li><NavLink to="/bras">Бюстгальтеры</NavLink></li>
                   <li><NavLink to="/knickers">Трусики</NavLink></li>
                   <li><NavLink to="/sale">Распродажа</NavLink></li>
                   <li><NavLink to="/shapewear">Корректирующее бельё</NavLink></li>
               </Dropdown>
               <li><NavLink to="/contacts">Контакты</NavLink></li>
           </Navbar>
           {/*<Navbar*/}
           {/*    alignLinks="right"*/}
           {/*    brand={<a className="brand-logo" href="#">Logo</a>}*/}
           {/*    extendWith={<Tabs className="tabs-transparent">*/}
           {/*        <Tab className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 1">Test 1</Tab>*/}
           {/*        <Tab active className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 2">Test 2</Tab>*/}
           {/*        <Tab className="white-text" disabled options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="disabled tab">Disabled Tab</Tab>*/}
           {/*        <Tab className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 4">Test 4</Tab></Tabs>}*/}
           {/*    id="mobile-nav"*/}
           {/*    menuIcon={<Icon>menu</Icon>}*/}
           {/*    options={{*/}
           {/*        draggable: true,*/}
           {/*        edge: 'left',*/}
           {/*        inDuration: 250,*/}
           {/*        onCloseEnd: null,*/}
           {/*        onCloseStart: null,*/}
           {/*        onOpenEnd: null,*/}
           {/*        onOpenStart: null,*/}
           {/*        outDuration: 200,*/}
           {/*        preventScrolling: true*/}
           {/*    }}*/}
           {/*>*/}
           {/*    <NavItem onClick={function noRefCheck(){}}>*/}
           {/*        Getting started*/}
           {/*    </NavItem>*/}
           {/*    <NavItem href="components.html">*/}
           {/*        Components*/}
           {/*    </NavItem>*/}
           {/*</Navbar>*/}
       </>
    )
}
