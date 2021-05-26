import { passwordRegex } from '../constants/regex';

export const emailRule = (t) => ([
  {
    required: true,
    message: t('authentication.email.isRequired')
  },
  {
    type: 'email',
    message: t('authentication.email.notValid')
  }
]);

export const passwordRule = (t) => ([
  {
    required: true,
    message: t('authentication.password.isRequired')
  },
  {
    pattern: passwordRegex,
    message: t('authentication.password.notValid')
  }
]);

export const confirmPasswordRule = (t) => ([
  {
    required: true,
    message: t('authentication.confirmPassword.isRequired'),
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject(new Error(t('authentication.confirmPassword.notValid')));
    },
  }),
]);
