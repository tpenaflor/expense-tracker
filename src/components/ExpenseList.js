import React from 'react'
import {connect} from 'react-redux'


import {Link} from 'react-router-dom'
import ExpenseEntry from './ExpenseEntry'
import ExpensesSummary from './ExpenseSummary'
import ExpenseFilter from './ExpenseFilter'
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='page-header'>
            <h1>Expense List 
                {props.all.expenses.length > 0 && ` ${props.expenses.length } of ${props.all.expenses.length}`}
            </h1>
            <ExpensesSummary />
            <Link to='/createExpense'>Add Expense</Link> 
        </div>
        <ExpenseFilter />
        
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
