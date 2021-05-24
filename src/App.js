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
import { ErrorBoundary, NotFound } from './pages/others/handler/uiHandler';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <BrowserRouter>
        <AHeader />
        <ResponseHandler />
        <ErrorBoundary>
          <AlertProvider>
            <Switch>
              <Route path="/login" exact component={Authentication} />
              <PrivateRoute path="/components" component={Default} />
              <Route component={NotFound} />
            </Switch>
          </AlertProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
