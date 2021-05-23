import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import AInputLabel from '../AInputLabel/AInputLabel';
import './style.scss';

const { Item } = Form;

const AInputForm = ({
  onChange,
  className,
  label,
  placeholder,
  disabled,
  readonly,
  size,
  type,
  autoSize,
  allowClear,
  value,
  name,
  rules,
  errorMessage,
  onFocus
}) => (
  <Item
    className={`${className} input-form`}
    name={name}
    rules={rules}
    extra={errorMessage}
  >
    <AInputLabel
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      readonly={readonly}
      size={size}
      autoSize={autoSize}
      type={type}
      allowClear={allowClear}
      onFocus={onFocus}
    />
  </Item>
);

AInputForm.defaultProps = {
  onChange: () => {},
  className: '',
  label: '',
  placeholder: '',
  disabled: false,
  readonly: false,
  size: 'middle',
  type: 'text',
  autoSize: false,
  allowClear: false,
  value: '',
  name: '',
  rules: [{}],
  errorMessage: '',
  onFocus: () => {}
};

AInputForm.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  autoSize: PropTypes.bool || PropTypes.object,
  allowClear: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.object),
  errorMessage: PropTypes.string,
  onFocus: PropTypes.func,
};

export default AInputForm;
