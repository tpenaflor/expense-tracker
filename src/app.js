import React from 'react' 
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Routes from './routers/appRouter'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

import {addExpense} from './actions/expenses'
// import {setTextFilter} from './actions/filters'

store.dispatch(addExpense({desc:'water bill', amount:50000, createAt:1}))
store.dispatch(addExpense({desc:'gas bill', amount:2000, createAt:32}))
store.dispatch(addExpense({desc:'electric bill', amount:15000, createAt:13}))
store.dispatch(addExpense({desc:'rent', amount:10000, createAt:17}))

// store.dispatch(setTextFilter("bill"))

// setTimeout(() => {
//     store.dispatch(setTextFilter("rent"))
// }, 5000)

const jsx = (
    <Provider store={store}>
        <Routes/ >  
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));