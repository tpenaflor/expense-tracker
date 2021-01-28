import React from 'react' 
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Routes, {history} from './routers/appRouter'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import {setExpenses} from './actions/expenses'
import * as auth from './actions/auth'
import {firebase } from './firebase/firebase'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Routes/ >  
    </Provider>
)

let haseRendered = false
const renderApp = () => {
    if (!haseRendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        haseRendered = true
    }        
}
ReactDOM.render(<p>Loading....</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(auth.setUser(user.uid))
        store.dispatch(setExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/')
                history.push('/home')
        })
    } else {
        store.dispatch(auth.removeUser())
        renderApp()
        history.push('/')
    }
})
