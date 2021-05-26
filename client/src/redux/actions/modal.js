import { MODAL_SET_OPEN, MODAL_SET_CLOSE } from '../types/modal';

export const setOpen = (params) => ({
  type: MODAL_SET_OPEN,
  payload: params
});

export const setClose = () => ({
  type: MODAL_SET_CLOSE
});
