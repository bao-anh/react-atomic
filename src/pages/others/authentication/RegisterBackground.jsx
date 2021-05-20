import React from 'react';
import PropTypes from 'prop-types';
import { AButton } from '../../../components/atoms';

const RegisterBackground = ({ onChangeAnimation }) => (
  <div>
    <AButton
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
