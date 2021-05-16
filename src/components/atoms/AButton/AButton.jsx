import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss';

const AButton = ({
  children,
  size,
  type,
  onClick,
  className
}) => (
  <Button
    type={type}
    size={size}
    onClick={onClick}
    className={className}
  >
    {children}
  </Button>
);

AButton.defaultProps = {
  size: 'middle',
  type: 'primary',
  onClick: () => {},
  className: ''
};

AButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default AButton;
