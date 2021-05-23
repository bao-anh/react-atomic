import { MODAL_SET_OPEN, MODAL_SET_CLOSE } from '../types/modal';

const initialState = {
  isOpen: false,
  content: '',
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    case MODAL_SET_OPEN: {
      const { content } = action.payload;
      return {
        ...state,
        isOpen: true,
        content
      };
    }
    case MODAL_SET_CLOSE: {
      return {
        ...state,
        isOpen: false,
        content: ''
      };
    }
    default: return { ...state };
  }
};

export default modal;
