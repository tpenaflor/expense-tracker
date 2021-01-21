import React from 'react'
import {Link} from 'react-router-dom'

import moment from 'moment'
const ExpenseEntry = ({id, desc, amount, createAt}) => (
    <div> 
        <h2>
        <Link to={`/editExpense/${id}`} >{desc}</Link></h2>
        <p>{`${(amount/100).toFixed(2)} on ${moment(createAt).format("MMM DD, YYYY")}`}</p>
    </div>
)

export default ExpenseEntry