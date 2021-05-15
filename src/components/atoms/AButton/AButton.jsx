import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss';

const AButton = ({ children, size, type }) => (
  <Button
    type={type}
    size={size}
  >
    {children}
  </Button>
);

AButton.defaultProps = {
  size: 'middle',
  type: 'primary',
};

AButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string
};

export default AButton;
