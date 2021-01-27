import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

export const CreateExpense = ({onSubmit, history}) => (
    <div>
        <h2>CreateExpense</h2>
        <ExpenseForm 
            onSubmit = {(expense) => {
                onSubmit(expense)
                history.push('/')
            }}
        />
    </div>

)

const mapDispatchToProps = (dispatch)=> ({
    onSubmit : (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(CreateExpense)