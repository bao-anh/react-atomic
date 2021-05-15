import React from 'react';
import {
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import './App.less';
import { AHeader, ANavbar } from './components/organisms';
import atomRoute from './routes/atoms';
import documentRoute from './routes/documents';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="wrapper">
      <BrowserRouter>
        <AHeader />
        <div className="navbar-and-content">
          <ANavbar />
          <div className="content">
            <Switch>
              {documentRoute()}
              {atomRoute()}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
