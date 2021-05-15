import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const AButton = ({ children }) => (
  <Button type="primary">
    {children.toString()}
  </Button>
);

AButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AButton;
