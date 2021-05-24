import React from 'react';
import { useTranslation } from 'react-i18next';
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
}) => {
  const { t } = useTranslation();
  return (
    <div className="authentication-login-wrapper">
      <ATypography
        variant="title"
        level={3}
        className="text-center"
      >
        {t('authentication.register')}
      </ATypography>
      <Form
        name="register"
        className="authentication-content"
        onFinish={onRegister}
      >
        <AInputForm
          value={credentials.email}
          label={`${t('authentication.email.label')}`}
          name="email"
          rules={emailRule(t)}
          placeholder={`${t('authentication.email.placeholder')}`}
          errorMessage={errors?.email}
          onFocus={() => onFocusField('email')}
          onChange={(e) => onChangeCredentials('email', e.target.value)}
        />
        <AInputForm
          value={credentials.password}
          label={`${t('authentication.password.label')}`}
          name="password"
          rules={passwordRule(t)}
          placeholder={`${t('authentication.password.placeholder')}`}
          type="password"
          errorMessage={errors?.password}
          onFocus={() => onFocusField('password')}
          onChange={(e) => onChangeCredentials('password', e.target.value)}
        />
        <AInputForm
          value={credentials.confirmPassword}
          label={`${t('authentication.confirmPassword.label')}`}
          rules={confirmPasswordRule(t)}
          name="confirmPassword"
          placeholder={`${t('authentication.confirmPassword.placeholder')}`}
          type="password"
          errorMessage={errors?.confirmPassword}
          onFocus={() => onFocusField('confirmPassword')}
          onChange={(e) => onChangeCredentials('confirmPassword', e.target.value)}
        />
        <AButtonForm
          htmlType="submit"
          block
          loading={isLoading}
        >
          {t('authentication.register')}
        </AButtonForm>
      </Form>
    </div>
  );
};

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
