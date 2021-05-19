import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.less';
import { AHeader, ANavbar } from './components/organisms';
import { AAlert } from './components/atoms';
import {
  Tyography,
  Button,
  Alert,
  Input
} from './pages';
import { AlertProvider } from './contexts/alert/alert';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <BrowserRouter>
        <AHeader />
        <div className="navbar-and-content">
          <ANavbar />
          <AlertProvider>
            <div className="content">
              <AAlert />
              <Switch>
                <Route path="/components/button" exact component={Button} />
                <Route path="/components/typography" exact component={Tyography} />
                <Route path="/components/alert" exact component={Alert} />
                <Route path="/components/input" exact component={Input} />
              </Switch>
            </div>
          </AlertProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
