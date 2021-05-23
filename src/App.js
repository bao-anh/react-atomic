import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.less';
import { AHeader } from './components/organisms';
import { Default, Authentication, PrivateRoute } from './routes';
import { AlertProvider } from './contexts/alert/alert';
import ResponseHandler from './pages/others/handler/responseHandler/ResponseHandler';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <BrowserRouter>
        <AHeader />
        <ResponseHandler />
        <AlertProvider>
          <Switch>
            <Route path="/login" exact component={Authentication} />
            <PrivateRoute component={Default} />
          </Switch>
        </AlertProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
