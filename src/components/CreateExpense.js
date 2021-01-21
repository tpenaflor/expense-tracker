import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

const CreateExpense = ({dispatch, history}) => (
    <div>
        <h2>CreateExpense</h2>
        <ExpenseForm 
            onSubmit = {(expense) => {
                dispatch(addExpense({...expense}))
                history.push('/')
            }}
        />
    </div>

)

export default connect()(CreateExpense)