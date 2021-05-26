import { ALERT_SET_OPEN, ALERT_SET_CLOSE } from '../types/alert';

const initialState = {
  isOpen: false,
  type: '',
  message: ''
};

const handleShowAlertMessage = (payload) => {
  const { status, data } = payload;
  let type = 'info';
  if (status >= 200 && status <= 300) type = 'success';
  else if (status >= 400 && status <= 500) type = 'error';
  return {
    type,
    message: data.alert
  };
};

const alert = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALERT_SET_OPEN: {
      const { payload } = action;
      if (!payload.data.alert) {
        return {
          ...state,
          isOpen: false
        };
      }
      const { type, message } = handleShowAlertMessage(payload);
      return {
        ...state,
        isOpen: true,
        type,
        message
      };
    }
    case ALERT_SET_CLOSE: {
      return {
        ...state,
        isOpen: false,
        type: '',
        message: ''
      };
    }
    default: return { ...state };
  }
};

export default alert;
