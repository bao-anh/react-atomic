
import store from '../redux/store';
import { MODAL_SET_OPEN } from '../redux/types/modal';

export const handleResponseError = (response) => {
  const { status } = response;
  if (status === 401) {
    store.dispatch({
      type: MODAL_SET_OPEN,
      payload: {
        content: 'Your section is expired, please login again'
      }
    });
  } else if (status === 500) {
    store.dispatch({
      type: MODAL_SET_OPEN,
      payload: {
        content: 'Server error'
      }
    });
  }
};

export const foo = () => {};
