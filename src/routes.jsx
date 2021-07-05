import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {NavbarMenu, MainPage, ContactsPage, FooterComponent, PageContainer, PagesList} from './components'

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
            <FooterComponent/>
        </div>
    )
}
