import React from 'react';
import { Route } from 'react-router-dom';
import { ANavbar } from '../components/organisms';
import {
  Tyography,
  Button,
  Alert,
  Input
} from '../pages';

const Default = () => (
  <div className="navbar-and-content">
    <ANavbar />
    <div className="content">
      <Route path="/components/button" exact component={Button} />
      <Route path="/components/typography" exact component={Tyography} />
      <Route path="/components/alert" exact component={Alert} />
      <Route path="/components/input" exact component={Input} />
    </div>
  </div>
);

export default Default;
