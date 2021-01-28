import React from 'react' 
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";

import HomePage from '../components/Home'
import Login from '../components/Login'
import CreateExpensePage from '../components/CreateExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/Help'
import ErrorPage from '../components/Error'
import CustomRoute from '../routers/CustomRoute'
import PublicRoute from '../routers/PublicRoute'

export const history = createBrowserHistory()

export default () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={Login} exact={true}/>
                <CustomRoute path='/home' component={HomePage}/>
                <CustomRoute path='/createExpense' component={CreateExpensePage} />
                <CustomRoute path='/editExpense/:id' component={EditExpensePage} />
                <CustomRoute path='/help' component={HelpPage} />
                <CustomRoute component={ErrorPage} />
            </Switch>
        </div>
    </Router>
)