import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../actions/auth'
import {NavLink} from 'react-router-dom'

export const Header = ({logOut}) => (
    <header>
        <h1>Expensify Header {process.env.WHERE && process.env.WHERE}</h1>
        <NavLink activeClassName="is-active" to='/home' >Home</NavLink> 
        <NavLink activeClassName="is-active" to='/createExpense'>Create</NavLink> 
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink> 
        <button onClick ={logOut}>Log Out</button>
    </header>
)

const dispathToProps = (dispatch) => ({
    logOut : () => {dispatch(signOut())}
})

export default connect(undefined, dispathToProps)(Header)