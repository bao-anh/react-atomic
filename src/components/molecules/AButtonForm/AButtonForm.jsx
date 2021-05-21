import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { AButton } from '../../atoms';
import './style.scss';

const { Item } = Form;

const AButtonForm = ({
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
  <Item className={`button-form-wrapper ${className}`}>
    <AButton
      type={type}
      size={size}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      danger={danger}
      block={block}
      htmlType={htmlType}
    >
      {children}
    </AButton>
  </Item>
);

export default AButtonForm;

AButtonForm.defaultProps = {
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

AButtonForm.propTypes = {
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
