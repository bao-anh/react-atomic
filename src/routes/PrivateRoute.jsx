import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/storageUtils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!getToken();
  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated ? (
          <Component {...props} />
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
