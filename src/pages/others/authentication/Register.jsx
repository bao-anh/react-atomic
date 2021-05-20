import React from 'react';
import { ATypography, AButton } from '../../../components/atoms';
import { AInputLabel } from '../../../components/molecules';

const Register = () => (
  <div className="authentication-login-wrapper">
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
        <AInputLabel
          label="Confirm password"
          placeholder="Enter your confirm password"
          type="password"
          className="mb-4"
        />
      </div>
      <AButton>
        Register
      </AButton>
    </div>
  </div>
);

export default Register;
