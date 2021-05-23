import React from 'react';
import { Route } from 'react-router-dom';
import { AAlert } from '../components/atoms';
import { Authentication as Login } from '../pages';

const Authentication = () => (
  <div className="authentication-wrapper">
    <AAlert />
    <Route path="/login" exact component={Login} />
  </div>
);

export default Authentication;
