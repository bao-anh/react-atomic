import React from 'react';
import { ATypography, AButton } from '../../atoms';
import './style.scss';

const AHeader = () => (
  <div className="header-wrapper">
    <ATypography type="title" level={3}>
      React Atomic Design
    </ATypography>
    <AButton type="primary">
      Docs
    </AButton>
  </div>
);

export default AHeader;
