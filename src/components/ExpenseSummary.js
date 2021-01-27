import React from 'react'
import {getVisibleExpenses, getTotalExpenses} from '../selectors/expenses'
import {connect} from 'react-redux'


const ExpenseSummary = (props) => (
    <div> 
        {`${Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(props.actTotal/100)} of
        ${Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(props.total/100)}
        `}
    </div>
)

const mapStateToProp = (state) => (
    {
        total : getTotalExpenses(state.expenses),
        actTotal : getTotalExpenses(getVisibleExpenses(state.expenses, state.filters))
    }
)

export default connect(mapStateToProp)(ExpenseSummary)