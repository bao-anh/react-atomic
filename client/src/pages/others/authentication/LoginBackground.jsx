import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { loginBackground } from '../../../assets/images';
import { AButton, AImage } from '../../../components/atoms';

const LoginBackground = ({ onChangeAnimation }) => {
  const { t } = useTranslation();
  return (
    <div className="background-wrapper">
      <div className="background-image">
        <AImage src={loginBackground} alt="login-background" width="100%" height={270} />
      </div>
      <AButton
        type="default"
        block
        onClick={() => onChangeAnimation('showLogin')}
      >
        {t('authentication.login')}
      </AButton>
    </div>
  );
};

export default LoginBackground;

LoginBackground.defaultProps = {
  onChangeAnimation: () => {}
};

LoginBackground.propTypes = {
  onChangeAnimation: PropTypes.func
};
