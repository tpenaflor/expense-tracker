import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({isAuth}) => {
    isAuth ? (
        <Route {...this.props}/>
    ) : (
        <Redirect to="/'" />
    )
}
    

const mapStateToProps = (state) => ({
    isAuth : !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)