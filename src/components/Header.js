import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../actions/auth'
import {Link} from 'react-router-dom'

export const Header = ({logOut}) => (
    <header className="header">
        <div className='content-container'>
            <div className='header__content'>
                <Link className = "header__title" to='/home' >
                    <h1>Expensify</h1>
                </Link> 
                <button onClick ={logOut}>Log Out</button>
            </div>
        </div>
    </header>
)

const dispathToProps = (dispatch) => ({
    logOut : () => {dispatch(signOut())}
})

export default connect(undefined, dispathToProps)(Header)