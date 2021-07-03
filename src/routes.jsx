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
import FooterComp from "./components/Main/Test/Footer-Component";
import PageContainer from "./components/PageContainer";

export  const useRoutes = () => {
    return(
        <div>
            <NavbarMenu/>
            <Switch>
                <Route path="/" exact>
                    <PageContainer Page={<MainPage/>}/>
                </Route>
                <Route path="/contacts" exact>
                    <PageContainer Page={<ContactsPage/>}/>
                </Route>
                <Route path="/brands" exact>
                    <PageContainer Page={<BrandsPage/>}/>
                </Route>
                <Route path="/bras" exact>
                    <PageContainer Page={<BrasPage/>}/>
                </Route>
                <Route path="/knickers" exact>
                    <PageContainer Page={<KnickersPage/>}/>
                </Route>
                <Route path="/sale" exact>
                    <PageContainer Page={<SalePage/>}/>
                </Route>
                <Route path="/shapewear" exact>
                    <PageContainer Page={<ShapewearPage/>}/>
                </Route>
                <Redirect to = "/"/>
            </Switch>
            <FooterComp/>
        </div>

    )
}
