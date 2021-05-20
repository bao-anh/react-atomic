import React from 'react';
import { Route } from 'react-router-dom';
import { Authentication as Login } from '../pages';

const Authentication = () => (
  <div className="authentication-wrapper">
    <Route path="/login" exact component={Login} />
  </div>
);

export default Authentication;
