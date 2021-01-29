import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

export const EditExpensePage = (props) => (
    <div className='content-container'>
        <h2>Edit {props.expense.desc} </h2>
        <ExpenseForm 
            desc = {props.expense.desc}
            amount = {props.expense.amount}
            createAt = {props.expense.createAt}
            note = {props.expense.note}
            onSubmit = {
            (expense) => {
                props.editExpense(props.expense.id, expense)
                props.history.push('/')
            }} 
            />
        
        <button onClick={()=>{
                props.removeExpense(props.expense.id)
                props.history.push('/')
            }}>Remove</button>
    </div>
)

const VerifyEditPage = (props) => (
    <div>
        {props.expense ? <EditExpensePage {...props} /> : props.history.push('/editExpense/')}
    </div>
)

const mapToProps = (state, props) =>
{
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id),
        all : state.expenses
    }
}

const mapDispToProps = (dispatch) => ({
    editExpense : (id,expense) => dispatch(editExpense(id, expense)),
    removeExpense : (id) => dispatch(removeExpense(id))
})

export default connect(mapToProps,mapDispToProps)(VerifyEditPage)