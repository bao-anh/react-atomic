import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.less';
import { AHeader, ANavbar } from './components/organisms';
import { AtomTypography, DocumentTyography, DocumentButton } from './pages';

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
              {/* atoms */}
              <Route path="/atoms/typography" exact component={AtomTypography} />
              {/* documents */}
              <Route path="/documents/button" exact component={DocumentButton} />
              <Route path="/documents/typography" exact component={DocumentTyography} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
