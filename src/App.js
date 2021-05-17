import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.less';
import { AHeader, ANavbar } from './components/organisms';
import { Tyography, Button } from './pages';

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
              <Route path="/components/button" exact component={Button} />
              <Route path="/components/typography" exact component={Tyography} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
