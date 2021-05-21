import React from 'react';
import PropTypes from 'prop-types';
import { AButton, AImage } from '../../../components/atoms';
import { registerBackground } from '../../../assets/images';
import './style.scss';

const RegisterBackground = ({ onChangeAnimation }) => (
  <div className="background-wrapper">
    <div className="background-image">
      <AImage src={registerBackground} alt="register-background" width="100%" height={256} />
    </div>
    <AButton
      block
      type="default"
      onClick={() => onChangeAnimation('hideLogin')}
    >
      Register
    </AButton>
  </div>
);

export default RegisterBackground;

RegisterBackground.defaultProps = {
  onChangeAnimation: () => {}
};

RegisterBackground.propTypes = {
  onChangeAnimation: PropTypes.func
};
