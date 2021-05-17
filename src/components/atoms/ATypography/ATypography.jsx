import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Typography } from 'antd';

const ATypography = ({
  variant,
  level,
  children,
  className,
}) => {
  const { Title, Text } = Typography;

  const renderText = () => (
    <Text className={className}>{children}</Text>
  );

  const renderTitle = () => (
    <Title
      className={className}
      level={level}
    >
      {children}
    </Title>
  );

  const renderTypography = () => {
    switch (variant) {
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
  variant: 'text',
  className: 'mb-2'
};

ATypography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  level: PropTypes.number,
  className: PropTypes.string
};

export default ATypography;
