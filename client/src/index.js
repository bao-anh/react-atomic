import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/store';
import './languages/i18n';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
