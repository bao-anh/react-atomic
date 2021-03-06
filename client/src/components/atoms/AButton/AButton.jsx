import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss';

const AButton = ({
  children,
  size,
  type,
  onClick,
  className,
  disabled,
  loading,
  danger,
  block,
  htmlType
}) => (
  <Button
    type={type}
    size={size}
    onClick={onClick}
    className={className}
    disabled={disabled}
    loading={loading}
    danger={danger}
    block={block}
    htmlType={htmlType}
  >
    {children}
  </Button>
);

AButton.defaultProps = {
  size: 'middle',
  type: 'primary',
  onClick: () => {},
  className: '',
  disabled: false,
  loading: false,
  danger: false,
  block: false,
  htmlType: ''
};

AButton.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  danger: PropTypes.bool,
  block: PropTypes.bool,
  htmlType: PropTypes.string,
};

export default AButton;
