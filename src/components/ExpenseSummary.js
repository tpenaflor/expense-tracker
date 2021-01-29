import React from 'react'
import {getVisibleExpenses, getTotalExpenses} from '../selectors/expenses'
import {connect} from 'react-redux'


const ExpenseSummary = (props) => (
    <div className='page-header'> 
        <h1>
            Viewing 
            {props.all.expenses.length > 0 && ` ${props.expenses.length } of ${props.all.expenses.length}`}
            
        </h1>
        <p>
            {`${Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(props.actTotal/100)} of
            ${Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(props.total/100)}
            `}
        </p>
    </div>
)

const mapStateToProp = (state) => (
    {
        expenses : getVisibleExpenses(state.expenses, state.filters),
        all : state,
        total : getTotalExpenses(state.expenses),
        actTotal : getTotalExpenses(getVisibleExpenses(state.expenses, state.filters))
    }
)

export default connect(mapStateToProp)(ExpenseSummary)