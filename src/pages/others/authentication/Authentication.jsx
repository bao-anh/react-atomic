import React from 'react';
import { ACard } from '../../../components/atoms';
import Login from './Login';
import Register from './Register';
import './style.scss';

const Authentication = () => {
  console.log('running');
  return (
    <ACard
      width={700}
      className="login-wrapper shadow-50"
    >
      <div className="login-content">
        <Register />
        <Login />
      </div>
    </ACard>
  );
};

export default Authentication;
