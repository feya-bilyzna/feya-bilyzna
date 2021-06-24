import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import {NavbarMenu} from "./components/NavbarMenu";
import {Main} from "./components/Main/Main";
import {Contacts} from "./components/Main/Contacts";
import Brands from "./components/All-Types-Goods/Brands";
import Bras from "./components/All-Types-Goods/Bras";
import Knickers from "./components/All-Types-Goods/Knickers";
import Sale from "./components/All-Types-Goods/Sale";
import Shapewear from "./components/All-Types-Goods/Shapewear";

export  const useRoutes = () => {
    return(
        <div>
            <NavbarMenu></NavbarMenu>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/contacts" exact>
                    <Contacts/>
                </Route>
                <Route path="/brands" exact>
                    <Brands/>
                </Route>
                <Route path="/bras" exact>
                    <Bras/>
                </Route>
                <Route path="/knickers" exact>
                    <Knickers/>
                </Route>
                <Route path="/sale" exact>
                    <Sale/>
                </Route>
                <Route path="/shapewear" exact>
                    <Shapewear/>
                </Route>
                <Redirect to = "/"/>
            </Switch>
        </div>

    )
}
