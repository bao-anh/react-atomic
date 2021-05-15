import React from 'react';
import { Route } from 'react-router-dom';
import { DocumentTyography } from '../pages';

export default () => (
  <Route path="/documents/typography" exact component={DocumentTyography} />
);
