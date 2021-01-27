import React from 'react' 
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Routes from './routers/appRouter'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

import {setExpenses} from './actions/expenses'


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Routes/ >  
    </Provider>
)

ReactDOM.render(<p>Loading....</p>, document.getElementById("app"));

store.dispatch(setExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
})

