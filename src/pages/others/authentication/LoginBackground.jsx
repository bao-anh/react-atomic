import React from 'react';
import PropTypes from 'prop-types';
import { loginBackground } from '../../../assets/images';
import { AButton, AImage } from '../../../components/atoms';

const LoginBackground = ({ onChangeAnimation }) => (
  <div className="background-wrapper">
    <div className="background-image">
      <AImage src={loginBackground} alt="login-background" width="100%" height={270} />
    </div>
    <AButton
      type="default"
      block
      onClick={() => onChangeAnimation('showLogin')}
    >
      Login
    </AButton>
  </div>
);

export default LoginBackground;

LoginBackground.defaultProps = {
  onChangeAnimation: () => {}
};

LoginBackground.propTypes = {
  onChangeAnimation: PropTypes.func
};
