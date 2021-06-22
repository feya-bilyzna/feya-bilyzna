import React from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Main} from "./components/Main/Main";
import {Contacts} from "./components/Main/Contacts";

export  const useRoutes = () => {
    return(
        <div>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/contacts" exact>
                    <Contacts/>
                </Route>
                <Redirect to = "/"/>
            </Switch>
        </div>

    )
}
