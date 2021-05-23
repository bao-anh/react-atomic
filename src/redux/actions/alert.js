import { ALERT_SET_OPEN, ALERT_SET_CLOSE } from '../types/alert';

export const setOpen = (params) => ({
  type: ALERT_SET_OPEN,
  payload: params
});

export const setClose = () => ({
  type: ALERT_SET_CLOSE
});
