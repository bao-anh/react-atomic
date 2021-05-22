import { call, fork, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { LOGIN } from '../types/auth';

export function* login(action) {
  const { email, password } = action.payload;
  try {
    yield call(api.login, {
      email,
      password
    });
    action.onSuccess();
  } catch (err) {
    action.onError(err);
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export default function* authSaga() {
  yield fork(watchLogin);
}
