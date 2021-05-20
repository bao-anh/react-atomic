import React from 'react';
import PropTypes from 'prop-types';
import { ATypography, AButton } from '../../../components/atoms';
import { AInputLabel } from '../../../components/molecules';

const Register = ({ credentials, onChangeCredentials }) => (
  <div
    className="authentication-login-wrapper"
  >
    <ATypography
      variant="title"
      level={3}
      className="text-center"
    >
      Register
    </ATypography>
    <div className="authentication-content">
      <div>
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
        <AInputLabel
          value={credentials.confirmPassword}
          label="Confirm password"
          placeholder="Enter your confirm password"
          type="password"
          className="mb-4"
          onChange={(e) => onChangeCredentials('confirmPassword', e.target.value)}
        />
      </div>
      <AButton>
        Register
      </AButton>
    </div>
  </div>
);

export default Register;

Register.defaultProps = {
  onChangeCredentials: () => {}
};

Register.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChangeCredentials: PropTypes.func
};
