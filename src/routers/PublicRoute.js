import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({isAuth, ...rest}) => (
    isAuth ? (
        <Redirect to="/home" />
    ) : (
        <Route {...rest} />
    )
)

const mapStateToProps = (state) => ({
    isAuth : !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)