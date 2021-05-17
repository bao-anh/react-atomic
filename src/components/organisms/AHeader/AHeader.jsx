import React from 'react';
import { ATypography, AButton } from '../../atoms';
import './style.scss';

const AHeader = () => (
  <div className="header-wrapper">
    <ATypography variant="title" level={3}>
      React Atomic Design
    </ATypography>
    <AButton variant="primary">
      Docs
    </AButton>
  </div>
);

export default AHeader;
