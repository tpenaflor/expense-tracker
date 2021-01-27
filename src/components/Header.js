import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify Header {process.env.WHERE && process.env.WHERE}</h1>
        <NavLink activeClassName="is-active" to='/' exact={true}>Home</NavLink> 
        <NavLink activeClassName="is-active" to='/createExpense'>Create</NavLink> 
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink> 
    </header>
)

export default Header