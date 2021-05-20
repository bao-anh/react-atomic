import React, { useState } from 'react';
import { ACard } from '../../../components/atoms';
import Login from './Login';
import Register from './Register';
import LoginBackground from './LoginBackground';
import RegisterBackground from './RegisterBackground';
import { ANIMATIONS_ENUM, transitionDuration } from './variable';
import './style.scss';

const Authentication = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

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

  const renderRegister = () => (
    <div className={ANIMATIONS_ENUM.REGISTER[currentAnimation]}>
      {(!isShowLogin || isShowAnimationLogin) ? (
        <Register
          credentials={credentials}
          onChangeCredentials={onChangeCredentials}
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
          onChangeCredentials={onChangeCredentials}
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

export default Authentication;
