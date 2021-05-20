import React from 'react';
import { ATypography, AButton } from '../../../components/atoms';
import { AInputLabel } from '../../../components/molecules';

const Login = () => (
  <div className="authentication-login-wrapper">
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
          label="Email"
          placeholder="Enter your email"
          className="mb-4"
        />
        <AInputLabel
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="mb-4"
        />
      </div>
      <AButton>
        Login
      </AButton>
    </div>
  </div>
);

export default Login;
