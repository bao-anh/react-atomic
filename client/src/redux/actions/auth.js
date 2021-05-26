import { AUTH_LOGIN, AUTH_REGISTER } from '../types/auth';

export const login = (params, onSuccess, onError) => ({
  type: AUTH_LOGIN,
  payload: params,
  onSuccess,
  onError
});

export const register = (params, onSuccess, onError) => ({
  type: AUTH_REGISTER,
  payload: params,
  onSuccess,
  onError
});
