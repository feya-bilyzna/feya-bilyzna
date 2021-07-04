import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {NavbarMenu} from "./components/NavbarMenu";
import {MainPage} from "./components/Main/MainPage";
import {ContactsPage} from "./components/ContactsPage/ContactsPage";
import FooterComp from "./components/Footer-Component";
import PageContainer from "./components/PageContainer";
import PagesList from "./data/pagesList";

export const useRoutes = () => {
    return (
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

                            <Route key={p.route} path={p.route} exact>
                                <PageContainer Page={p.component}/>
                            </Route>
                        )
                    }
                )}
                <Redirect to="/"/>
            </Switch>
            <FooterComp/>
        </div>
    )
}
