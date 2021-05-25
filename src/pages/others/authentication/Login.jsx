import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { ATypography } from '../../../components/atoms';
import { AInputForm, AButtonForm } from '../../../components/molecules';
import { emailRule, passwordRule } from '../../../utils/validationUtils';

const Login = ({
  credentials,
  onChangeCredentials,
  onLogin,
  isLoading,
  errors,
  onFocusField
}) => {
  const { t } = useTranslation();
  return (
    <div className="authentication-login-wrapper">
      <ATypography
        variant="title"
        level={3}
        className="text-center"
      >
        {t('authentication.login')}
      </ATypography>
      <Form
        name="login"
        className="authentication-content"
        onFinish={onLogin}
      >
        <div className="login-field">
          <AInputForm
            value={credentials.email}
            label={`${t('authentication.email.label')}`}
            name="email"
            rules={emailRule(t)}
            placeholder={`${t('authentication.email.placeholder')}`}
            onChange={(e) => onChangeCredentials('email', e.target.value)}
            onFocus={() => onFocusField('email')}
            errorMessage={errors.email}
          />
          <AInputForm
            value={credentials.password}
            label={`${t('authentication.password.label')}`}
            name="password"
            rules={passwordRule(t)}
            placeholder={`${t('authentication.email.placeholder')}`}
            type="password"
            onFocus={() => onFocusField('password')}
            onChange={(e) => onChangeCredentials('password', e.target.value)}
            errorMessage={errors.password}
          />
        </div>
        <AButtonForm
          htmlType="submit"
          block
          loading={isLoading}
        >
          {t('authentication.login')}
        </AButtonForm>
      </Form>
    </div>
  );
};

export default Login;

Login.defaultProps = {
  onChangeCredentials: () => {},
  onLogin: () => {},
  isLoading: false,
  onFocusField: () => {}
};

Login.propTypes = {
  credentials: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCredentials: PropTypes.func,
  onLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  onFocusField: PropTypes.func
};
