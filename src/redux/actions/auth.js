import { LOGIN, REGISTER } from '../types/auth';

export const login = (params, onSuccess, onError) => ({
  type: LOGIN,
  payload: params,
  onSuccess,
  onError
});

export const register = (params, onSuccess, onError) => ({
  type: REGISTER,
  payload: params,
  onSuccess,
  onError
});
