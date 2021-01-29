import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ExpenseEntry from './ExpenseEntry'
import ExpensesSummary from './ExpenseSummary'
import ExpenseFilter from './ExpenseFilter'
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className='content-container'>
        <ExpensesSummary />
        <ExpenseFilter />
        <button className='button-add-expense'
            onClick={()=> props.history.push('/createExpense')}
        >Add Expense</button>
        {props.expenses.length > 0 ? (
            props.expenses.map((exp) => (
            <ExpenseEntry key={exp.id} {...exp}/>
        ))) :
            <h3>No matching expenses or you are debt free</h3>
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters),
        all : state
    }
}

export default connect(mapStateToProps)(ExpenseList);
