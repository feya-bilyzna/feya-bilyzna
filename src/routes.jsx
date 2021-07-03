import React from 'react'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {NavbarMenu} from "./components/NavbarMenu";
import {MainPage} from "./components/Main/MainPage";
import {ContactsPage} from "./components/ContactsPage/ContactsPage";
import {BrandsPage} from "./components/All-Types-Goods/BrandsPage";
import {BrasPage} from "./components/All-Types-Goods/BrasPage";
import {KnickersPage} from "./components/All-Types-Goods/KnickersPage";
import {SalePage} from "./components/All-Types-Goods/SalePage";
import {ShapewearPage} from "./components/All-Types-Goods/ShapewearPage";
import FooterComp from "./components/Footer-Component";
import PageContainer from "./components/PageContainer";
import PagesList from "./data/pagesList";

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
                {PagesList.map(p => {
                        return (
                            <>
                                <Route path={p.route} exact>
                                    <PageContainer Page={p.component}/>
                                </Route>
                            </>
                        )
                    }
                )}
                <Redirect to = "/"/>
            </Switch>
            <FooterComp/>
        </div>
    )
}
