import React from 'react';
import PropTypes from 'prop-types';
import { AInput, ATypography } from '../../atoms';
import './style.scss';

const ASelectLabel = ({
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
  value
}) => (
  <div className={`$label-wrapper ${className}`}>
    <ATypography className="label">
      {label}
    </ATypography>
    <AInput
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      readonly={readonly}
      size={size}
      autoSize={autoSize}
      type={type}
      allowClear={allowClear}
      value={value}
    />
  </div>
);

ASelectLabel.defaultProps = {
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
  value: ''
};

ASelectLabel.propTypes = {
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
  value: PropTypes.string
};

export default ASelectLabel;
