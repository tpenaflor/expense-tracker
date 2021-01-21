import React from 'react'
import {connect} from 'react-redux'

import ExpenseEntry from './ExpenseEntry'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>

        {props.expenses.length > 0 ? 
            props.expenses.map((exp) => (
            <ExpenseEntry key={exp.id} {...exp}/>
        )) :
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
