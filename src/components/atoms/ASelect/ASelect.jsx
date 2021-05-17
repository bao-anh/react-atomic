import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const ASelect = ({
  items,
  defaultValue,
  onChange,
  className
}) => {
  const renderOptions = () => (
    items.map((item) => (
      <Option
        value={item.value}
        disabled={item.disabled ?? false}
      >
        {item.name}
      </Option>
    ))
  );

  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    >
      {renderOptions()}
    </Select>
  );
};

ASelect.defaultProps = {
  items: [],
  defaultValue: '',
  onChange: () => {},
  className: ''
};

ASelect.propTypes = {
  items: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default ASelect;
