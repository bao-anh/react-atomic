import React from 'react';
import './App.less';
import { AHeader, ANavbar } from './components/organisms';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="wrapper">
      <AHeader />
      <div className="navbar-and-content">
        <ANavbar />
        <div className="content">
          this
        </div>
      </div>
    </div>
  );
}

export default App;
