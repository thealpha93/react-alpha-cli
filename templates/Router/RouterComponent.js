module.exports = `import React from "react";
import { Redirect, Route } from "react-router-dom";
import routes from "../utilities/Routes";
import DefaultLayout from '../layouts/DefaultLayout'
import PropTypes, {object, func, element} from 'prop-types'

const propTypes = {
  component: PropTypes.oneOfType([object, func, element]).isRequired,
  layout: PropTypes.func.isRequired
}

// Set the default layout
const defaultProps = {
  layout: DefaultLayout
}

export const PrivateRoute = ({ component: Component, layout: Layout, auth, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={props => {
        return !!user ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export const PublicRoute = ({ component: Component, layout: Layout, auth, RequestLogin, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={props =>
        !user ? (
          <Layout>
            <Component {...{auth, RequestLogin, ...props}} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: routes.home,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export const Refresh = ({ path = "/" }) => (
  <Route
    path={path}
    component={({ history, location, match }) => {
      history.replace({
        ...location,
        pathname: location.pathname.substring(match.path.length),
      });
      return null;
    }}
  />
);

// Set propTypes
PublicRoute.propTypes = propTypes
PrivateRoute.propTypes = propTypes
PublicRoute.defaultProps = defaultProps
PrivateRoute.defaultProps = defaultProps
`