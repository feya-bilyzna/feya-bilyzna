import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {
    NavbarMenu,
    MainPage,
    ContactsPage,
    FooterComponent,
    PageContainer,
    linkListCategories,
    linkListSubcategoriesBra,
    linkListSubcategoriesKnickers,
    SportsBra,
    Set,
    Accessories,
} from './components'


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
                {linkListCategories.map(p => {
                        return (
                            <Route key={p.route} path={p.route} exact>
                                <PageContainer Page={p.component}/>
                            </Route>
                        )
                    }
                )}
                {linkListSubcategoriesBra.map(p => {
                        return (
                            <Route key={p.route} path={p.route} exact>
                                <PageContainer Page={p.component}/>
                            </Route>
                        )
                    }
                )}
                {linkListSubcategoriesKnickers.map(p => {
                        return (
                            <Route key={p.route} path={p.route} exact>
                                <PageContainer Page={p.component}/>
                            </Route>
                        )
                    }
                )}
                <Route path="/sport" exact>
                    <PageContainer Page={<SportsBra/>}/>
                </Route>
                <Route path="/set" exact>
                    <PageContainer Page={<Set/>}/>
                </Route>
                <Route path="/accessories" exact>
                    <PageContainer Page={<Accessories/>}/>
                </Route>
                <Redirect to="/"/>
            </Switch>
            <FooterComponent/>
        </div>
    )
}
