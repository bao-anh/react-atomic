import React from 'react';
import { ATypography } from '../../../../components/atoms';
import './style.scss';

const NotFound = () => (
  <div className="ui-handler">
    <ATypography variant="title" level={1}>
      404
    </ATypography>
    <ATypography variant="title" level={2}>
      Page not found
    </ATypography>
  </div>
);

export default NotFound;
