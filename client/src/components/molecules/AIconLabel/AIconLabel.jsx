import React from 'react';
import PropTypes from 'prop-types';
import { ATypography } from '../../atoms';
import { STYLES_ENUM } from './variable';
import './style.scss';

const IconLabel = ({
  label,
  icon,
  direction,
  className,
}) => (
  <div className={`icon-label-wrapper flex-${direction} ${className}`}>
    <div className={STYLES_ENUM[direction].icon}>
      {icon}
    </div>
    <ATypography className={STYLES_ENUM[direction].label}>
      {label}
    </ATypography>
  </div>
);

IconLabel.defaultProps = {
  label: '',
  direction: 'bottom',
  className: '',
};

IconLabel.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any.isRequired,
  direction: PropTypes.string,
  className: PropTypes.string,
};

export default IconLabel;
