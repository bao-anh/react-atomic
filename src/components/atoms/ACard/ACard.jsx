import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './style.scss';

const ACard = ({
  children,
  width,
  height,
  title,
  className
}) => (
  <Card
    title={title}
    style={{ width, height }}
    className={`card-wrapper ${className}`}
  >
    {children}
  </Card>
);

export default ACard;

ACard.defaultProps = {
  width: 300,
  height: 300,
  title: '',
  className: ''
};

ACard.propTypes = {
  children: PropTypes.any.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string
};
