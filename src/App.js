import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.less';
import { AHeader } from './components/organisms';
import { PrivateRoute } from './routes';
import { AlertProvider } from './contexts/alert/alert';
import ResponseHandler from './pages/others/handler/responseHandler/ResponseHandler';
import { ErrorBoundary, NotFound } from './pages/others/handler/uiHandler';
import { getLanguage } from './utils/storageUtils';
import {
  Authentication,
  Typography,
  Button,
  Alert,
  Input,
  Settings
} from './pages';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const language = getLanguage();
    i18n.changeLanguage(language);
  }, []);

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
              {/* components */}
              <PrivateRoute path="/components/button" exact component={Button} />
              <PrivateRoute path="/components/typography" exact component={Typography} />
              <PrivateRoute path="/components/alert" exact component={Alert} />
              <PrivateRoute path="/components/input" exact component={Input} />
              {/* settings */}
              <PrivateRoute path="/settings/general" exact component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </AlertProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
