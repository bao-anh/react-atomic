import {
  call,
  fork,
  takeLatest,
  put
} from 'redux-saga/effects';
import api from '../../services/api';
import { AUTH_LOGIN, AUTH_REGISTER } from '../types/auth';
import { setToken } from '../../utils/storageUtils';
import { setOpen as alertSetOpen } from '../actions/alert';

export function* login(action) {
  const { email, password } = action.payload;
  try {
    const res = yield call(api.login, {
      email,
      password
    });
    setToken(res.data.access_token);
    action.onSuccess();
  } catch (err) {
    action.onError(err?.response?.data.errors);
  }
}

export function* register(action) {
  const { email, password, confirmPassword } = action.payload;
  try {
    const res = yield call(api.register, {
      email,
      password,
      confirmPassword
    });
    setToken(res.data.access_token);
    yield put(alertSetOpen(res));
    action.onSuccess();
  } catch (err) {
    action.onError(err?.response?.data.errors);
  }
}

export function* watchLogin() {
  yield takeLatest(AUTH_LOGIN, login);
}

export function* watchRegister() {
  yield takeLatest(AUTH_REGISTER, register);
}

export default function* authSaga() {
  yield fork(watchLogin);
  yield fork(watchRegister);
}
