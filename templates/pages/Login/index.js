module.exports = `import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
// import styles from './Login.module.css'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }
    login(email="something@mailinator.com", password="something") {
        this.props.RequestLogin({email, password})
    }
    render() {
        if (this.props.auth && this.props.auth.isLoggedIn) {
            return (
                <Redirect
                to={{ pathname: "/", state: { from: this.props.location } }}
                />
            );
        }
        return (
            <div className="App">
                <div className="App-header">
                    <h3>Login</h3>
                    <button className="btn btn-secondary" onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}
`