module.exports = `import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../../store/auth/actions";
import { Redirect } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.RequestLogout();
  }
  render() {
    if (this.props.auth && !this.props.auth.isLoggedIn) {
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: this.props.location } }}
        />
      );
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Redux Saga</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <button onClick={this.logout} className="btn btn-secondary">Logout</button>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
`