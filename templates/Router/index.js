module.exports = `import routes from "../utilities/Routes";
import { PrivateRoute, PublicRoute } from "./RouterComponent";
import React, { Component } from 'react'
import { Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginLayout from '../layouts/LoginLayout'
import { Home, Login } from "../pages";
import * as authActions from '../store/auth/actions'
class Router extends Component {
    componentDidMount() {
    const user = localStorage.getItem("user");
    if (user) {
      this.props.LoginSuccess(user);
    }
    }

    render() {
        return (
            <Switch>
                <PublicRoute exact path={routes.login} auth={this.props.auth} RequestLogin={this.props.RequestLogin} component={Login} layout={LoginLayout}/>
                <PrivateRoute exact path={routes.home} component={Home}/>
            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return { auth : state && state.auth}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(authActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router))`