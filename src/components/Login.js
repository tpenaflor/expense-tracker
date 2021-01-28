import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

export const Login = ({login}) => (
    <div>
        <button onClick={login} >Login</button>
    </div>
)

const dispathToProps = (dispatch) => ({
    login : () => {dispatch(startLogin())}
})

export default connect(undefined, dispathToProps)(Login)

