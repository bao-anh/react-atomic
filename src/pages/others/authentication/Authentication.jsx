import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../../redux/actions/auth';
import { ACard } from '../../../components/atoms';
import Login from './Login';
import Register from './Register';
import LoginBackground from './LoginBackground';
import RegisterBackground from './RegisterBackground';
import { ANIMATIONS_ENUM, transitionDuration } from './variable';
import useErrorMessage from '../../../hooks/useErrorMessage';
import './style.scss';

const Authentication = ({ login, register, history }) => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { errors, setErrors, onFocusField } = useErrorMessage();
  const [isLoading, setIsLoading] = useState(false);

  const isShowAnimationLogin = currentAnimation === 'showLogin';
  const isHideAnimationLogin = currentAnimation === 'hideLogin';

  const onChangeAnimation = (state) => {
    setIsShowLogin(!isShowLogin);
    setCurrentAnimation(state);
    setTimeout(() => {
      setCurrentAnimation(null);
    }, transitionDuration);
  };

  const onChangeCredentials = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value
    });
  };

  const onSuccess = () => {
    setIsLoading(false);
    history.push('/');
  };

  const onError = (responseErrors) => {
    setErrors(responseErrors);
    setIsLoading(false);
  };

  const onLogin = () => {
    setIsLoading(true);
    const { email, password } = credentials;
    login({ email, password }, onSuccess, onError);
  };

  const onRegister = () => {
    setIsLoading(true);
    const { email, password, confirmPassword } = credentials;
    register({ email, password, confirmPassword }, onSuccess, onError);
  };

  const renderRegister = () => (
    <div className={ANIMATIONS_ENUM.REGISTER[currentAnimation]}>
      {(!isShowLogin || isShowAnimationLogin) ? (
        <Register
          credentials={credentials}
          isLoading={isLoading}
          onChangeCredentials={onChangeCredentials}
          onRegister={onRegister}
          onFocusField={onFocusField}
          errors={errors}
        />
      ) : (
        <RegisterBackground onChangeAnimation={onChangeAnimation} />
      )}
    </div>
  );

  const renderLogin = () => (
    <div className={ANIMATIONS_ENUM.LOGIN[currentAnimation]}>
      {(isShowLogin || isHideAnimationLogin) ? (
        <Login
          credentials={credentials}
          isLoading={isLoading}
          onChangeCredentials={onChangeCredentials}
          onLogin={onLogin}
          onFocusField={onFocusField}
          errors={errors}
        />
      ) : (
        <LoginBackground onChangeAnimation={onChangeAnimation} />
      )}
    </div>
  );

  return (
    <ACard
      width={700}
      className="login-wrapper shadow-50"
    >
      <div className="login-content">
        {renderRegister()}
        {renderLogin()}
      </div>
    </ACard>
  );
};

Authentication.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(authAction.login, dispatch),
  register: bindActionCreators(authAction.register, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
