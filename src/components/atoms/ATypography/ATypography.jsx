import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Typography } from 'antd';

const ATypography = ({ type, level, children }) => {
  const { Title, Text } = Typography;

  const renderText = () => (
    <Text>{children}</Text>
  );

  const renderTitle = () => (
    <Title level={level}>{children}</Title>
  );

  const renderTypography = () => {
    switch (type) {
      case 'text': {
        return renderText();
      }
      case 'title': {
        return renderTitle();
      }
      default: {
        return null;
      }
    }
  };

  return (
    renderTypography()
  );
};

ATypography.defaultProps = {
  level: 0,
  type: 'text'
};

ATypography.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  level: PropTypes.number
};

export default ATypography;
