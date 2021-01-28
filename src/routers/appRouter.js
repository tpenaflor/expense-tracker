import React from 'react' 
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";

import Header from '../components/Header'
import HomePage from '../components/Home'
import Login from '../components/Login'
import CreateExpensePage from '../components/CreateExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/Help'
import ErrorPage from '../components/Error'
import PrivateRoute from '../routers/PrivateRoute'

export const history = createBrowserHistory()

export default () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Login} exact={true}/>
                <PrivateRoute path='/home' component={HomePage}/>
                <PrivateRoute path='/createExpense' component={CreateExpensePage} />
                <PrivateRoute path='/editExpense/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </Router>
)