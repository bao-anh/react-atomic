import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { ALERT_SET_OPEN, ALERT_SET_CLOSE } from './type';

const AlertContext = createContext();

const initialize = {
  isOpen: false,
  type: 'success'
};

const reducer = (state, action) => {
  const { type, message } = action?.payload;
  switch (action.type) {
    case ALERT_SET_OPEN: {
      return {
        isOpen: true,
        type,
        message
      };
    }
    case ALERT_SET_CLOSE: {
      return {
        isOpen: false,
        type: '',
        message: ''
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialize);
  const value = { alertState: state, alertDispatch: dispatch };
  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};

const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useCount must be used within a CountProvider');

  return context;
};

AlertProvider.propTypes = {
  children: PropTypes.any.isRequired
};

export { AlertProvider, useAlert };
