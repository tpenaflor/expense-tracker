import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'

const ExpenseDashboard = () => (
    <div>
        <h1>I'm in heroku</h1>
        <ExpenseFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboard