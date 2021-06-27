import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import {NavbarMenu} from "./components/NavbarMenu";
import {MainPage} from "./components/Main/MainPage";
import {ContactsPage} from "./components/Main/ContactsPage";
import {BrandsPage} from "./components/All-Types-Goods/BrandsPage";
import {BrasPage} from "./components/All-Types-Goods/BrasPage";
import {KnickersPage} from "./components/All-Types-Goods/KnickersPage";
import {SalePage} from "./components/All-Types-Goods/SalePage";
import {ShapewearPage} from "./components/All-Types-Goods/ShapewearPage";

export  const useRoutes = () => {
    return(
        <div>
            <NavbarMenu></NavbarMenu>
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/contacts" exact>
                    <ContactsPage/>
                </Route>
                <Route path="/brands" exact>
                    <BrandsPage/>
                </Route>
                <Route path="/bras" exact>
                    <BrasPage/>
                </Route>
                <Route path="/knickers" exact>
                    <KnickersPage/>
                </Route>
                <Route path="/sale" exact>
                    <SalePage/>
                </Route>
                <Route path="/shapewear" exact>
                    <ShapewearPage/>
                </Route>
                <Redirect to = "/"/>
            </Switch>
        </div>

    )
}
