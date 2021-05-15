import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

const ADivider = ({ children, orientation }) => (
  <Divider orientation={orientation}>
    {children}
  </Divider>
);

export default ADivider;

ADivider.defaultProps = {
  children: null,
  orientation: null
};

ADivider.propTypes = {
  children: PropTypes.string,
  orientation: PropTypes.string
};
