import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { ATypography } from '../../../components/atoms';
import { AInputForm, AButtonForm } from '../../../components/molecules';
import { emailRule, passwordRule } from '../../../utils/validationUtils';

const Login = ({ credentials, onChangeCredentials, onLogin }) => (
  <div className="authentication-login-wrapper">
    <ATypography
      variant="title"
      level={3}
      className="text-center"
    >
      Login
    </ATypography>
    <Form
      name="login"
      className="authentication-content"
      onFinish={onLogin}
    >
      <div className="login-field">
        <AInputForm
          value={credentials.email}
          label="Email"
          name="email"
          rules={emailRule}
          placeholder="Enter your email"
          onChange={(e) => onChangeCredentials('email', e.target.value)}
        />
        <AInputForm
          value={credentials.password}
          label="Password"
          name="password"
          rules={passwordRule}
          placeholder="Enter your password"
          type="password"
          onChange={(e) => onChangeCredentials('password', e.target.value)}
        />
      </div>
      <AButtonForm htmlType="submit" block>
        Login
      </AButtonForm>
    </Form>
  </div>
);

export default Login;

Login.defaultProps = {
  onChangeCredentials: () => {},
  onLogin: () => {}
};

Login.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChangeCredentials: PropTypes.func,
  onLogin: PropTypes.func,
};
