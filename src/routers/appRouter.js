import React from 'react' 
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/Home'
import CreateExpensePage from '../components/CreateExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/Help'
import ErrorPage from '../components/Error'

export default () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/createExpense' component={CreateExpensePage} />
                <Route path='/editExpense/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </BrowserRouter>
)