import React from 'react'

import ExpenseList from './ExpenseList'

const ExpenseDashboard = (props) => (
    <div>
        <ExpenseList {...props}/>
    </div>
)

export default ExpenseDashboard