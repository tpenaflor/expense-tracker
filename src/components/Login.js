import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

export const Login = ({login}) => (
    <div className = "box-layout">
        <div className = "box-layout__box">   
            <h1 className="box-layout__title">Expense Logger</h1>
            <p>It is time to track your expenses</p>
            <button className='button' onClick={login} >Login with Google</button>
        </div>
    </div>
)

const dispathToProps = (dispatch) => ({
    login : () => {dispatch(startLogin())}
})

export default connect(undefined, dispathToProps)(Login)

