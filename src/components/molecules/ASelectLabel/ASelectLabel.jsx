import React from 'react';
import PropTypes from 'prop-types';
import { ASelect, ATypography } from '../../atoms';
import './style.scss';

const ASelectLabel = ({
  items,
  defaultValue,
  onChange,
  className,
  label
}) => (
  <div className="wrapper">
    <ATypography className="label">
      {label}
    </ATypography>
    <ASelect
      items={items}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    />
  </div>
);

ASelectLabel.defaultProps = {
  items: [],
  defaultValue: '',
  onChange: () => {},
  className: '',
  label: ''
};

ASelectLabel.propTypes = {
  items: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default ASelectLabel;
