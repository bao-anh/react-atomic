import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { ATypography } from '../../../components/atoms';
import { AInputForm, AButtonForm } from '../../../components/molecules';
import { emailRule, passwordRule, confirmPasswordRule } from '../../../utils/validationUtils';

const Register = ({
  credentials,
  onChangeCredentials,
  onRegister,
  isLoading,
  errors,
  onFocusField
}) => (
  <div className="authentication-login-wrapper">
    <ATypography
      variant="title"
      level={3}
      className="text-center"
    >
      Register
    </ATypography>
    <Form
      name="register"
      className="authentication-content"
      onFinish={onRegister}
    >
      <AInputForm
        value={credentials.email}
        label="Email"
        name="email"
        rules={emailRule}
        placeholder="Enter your email"
        errorMessage={errors.email}
        onFocus={() => onFocusField('email')}
        onChange={(e) => onChangeCredentials('email', e.target.value)}
      />
      <AInputForm
        value={credentials.password}
        label="Password"
        name="password"
        rules={passwordRule}
        placeholder="Enter your password"
        type="password"
        errorMessage={errors.password}
        onFocus={() => onFocusField('password')}
        onChange={(e) => onChangeCredentials('password', e.target.value)}
      />
      <AInputForm
        value={credentials.confirmPassword}
        label="Confirm password"
        rules={confirmPasswordRule}
        name="confirmPassword"
        placeholder="Enter your confirm password"
        type="password"
        errorMessage={errors.confirmPassword}
        onFocus={() => onFocusField('confirmPassword')}
        onChange={(e) => onChangeCredentials('confirmPassword', e.target.value)}
      />
      <AButtonForm
        htmlType="submit"
        block
        loading={isLoading}
      >
        Register
      </AButtonForm>
    </Form>
  </div>
);

export default Register;

Register.defaultProps = {
  onChangeCredentials: () => {},
  onRegister: () => {},
  isLoading: false,
  onFocusField: () => {}
};

Register.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChangeCredentials: PropTypes.func,
  onRegister: PropTypes.func,
  isLoading: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  onFocusField: PropTypes.func
};
