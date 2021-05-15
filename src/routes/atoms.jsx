import React from 'react';
import { Route } from 'react-router-dom';
import { AtomTypography } from '../pages';

export default () => (
  <Route path="/atoms/typography" exact component={AtomTypography} />
);
