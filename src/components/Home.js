import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'

const ExpenseDashboard = () => (
    <div>
        <ExpenseFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboard