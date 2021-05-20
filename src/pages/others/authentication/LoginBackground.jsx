import React from 'react';
import PropTypes from 'prop-types';
import { AButton } from '../../../components/atoms';

const LoginBackground = ({ onChangeAnimation }) => (
  <div>
    <AButton onClick={() => onChangeAnimation('showLogin')}>
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
