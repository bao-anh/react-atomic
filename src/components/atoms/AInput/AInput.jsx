import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './style.scss';

const { Password, TextArea } = Input;

const AInput = ({
  placeholder,
  onChange,
  disabled,
  readonly,
  size,
  type,
  autoSize,
  allowClear,
}) => {
  const renderInput = () => {
    switch (type) {
      case 'text': return (
        <Input
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          allowClear={allowClear}
        />
      );
      case 'password': return (
        <Password
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          allowClear={allowClear}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      );
      case 'textarea': return (
        <TextArea
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          autoSize={autoSize}
          allowClear={allowClear}
        />
      );
      default: {
        throw new Error(`Unhandled type: ${type}`);
      }
    }
  };
  return renderInput();
};

export default AInput;

AInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  disabled: false,
  readonly: false,
  size: 'middle',
  type: 'text',
  autoSize: false,
  allowClear: false
};

AInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  autoSize: PropTypes.bool || PropTypes.object,
  allowClear: PropTypes.bool
};
