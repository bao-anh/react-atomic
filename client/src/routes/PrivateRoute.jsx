import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/storageUtils';
import { ANavbar } from '../components/organisms';
import { AAlert } from '../components/atoms';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!getToken();
  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated ? (
          <div className="navbar-and-content">
            <ANavbar />
            <div className="content">
              <AAlert className="with-navbar" />
              <Component {...props} />
            </div>
          </div>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        ))
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
};

export default PrivateRoute;
