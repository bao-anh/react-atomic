import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AImage = ({
  src,
  width,
  height,
  alt,
  bordered,
  className
}) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
    className={`${className} ${bordered ? 'bordered' : ''}`}
  />
);

export default AImage;

AImage.defaultProps = {
  src: '',
  width: 'auto',
  height: 'auto',
  alt: 'regular image',
  bordered: true,
  className: ''
};

AImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  alt: PropTypes.string,
  bordered: PropTypes.bool,
  className: PropTypes.string
};
