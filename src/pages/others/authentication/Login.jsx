import React from 'react';
import PropTypes from 'prop-types';
import { ATypography, AButton } from '../../../components/atoms';
import { AInputLabel } from '../../../components/molecules';

const Login = ({ credentials, onChangeCredentials }) => (
  <div
    className="authentication-login-wrapper"
  >
    <ATypography
      variant="title"
      level={3}
      className="text-center"
    >
      Login
    </ATypography>
    <div className="authentication-content">
      <div className="login-field">
        <AInputLabel
          value={credentials.email}
          label="Email"
          placeholder="Enter your email"
          className="mb-4"
          onChange={(e) => onChangeCredentials('email', e.target.value)}
        />
        <AInputLabel
          value={credentials.password}
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="mb-4"
          onChange={(e) => onChangeCredentials('password', e.target.value)}
        />
      </div>
      <AButton>
        Login
      </AButton>
    </div>
  </div>
);

export default Login;

Login.defaultProps = {
  onChangeCredentials: () => {}
};

Login.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChangeCredentials: PropTypes.func
};
