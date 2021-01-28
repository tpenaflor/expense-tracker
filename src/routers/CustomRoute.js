import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

const CustomRoute = ({isAuth, ...rest}) => (
    isAuth ? (
        <div>
            <Header />
            <Route {...rest}/>
        </div>
    ) : (
        <Redirect to="/" />
    )
)

const mapStateToProps = (state) => ({
    isAuth : !!state.auth.uid
})

export default connect(mapStateToProps)(CustomRoute)