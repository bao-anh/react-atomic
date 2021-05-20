import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.less';
import { AHeader } from './components/organisms';
import { AAlert } from './components/atoms';
import { Default, Authentication } from './routes';
import { AlertProvider } from './contexts/alert/alert';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <BrowserRouter>
        <AHeader />
        <AlertProvider>
          <AAlert />
          <Switch>
            <Route path="/login" exact component={Authentication} />
            <Route component={Default} />
          </Switch>
        </AlertProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
