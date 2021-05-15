import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss';

const AButton = ({ children, size }) => (
  <Button
    type="primary"
    size={size}
  >
    {children}
  </Button>
);

AButton.defaultProps = {
  size: 'middle',
};

AButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default AButton;
