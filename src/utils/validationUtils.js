import { passwordRegex } from '../constants/regex';

export const emailRule = [
  {
    required: true,
    message: 'Please enter your email address'
  },
  {
    type: 'email',
    message: 'Please enter valid email address'
  }
];

export const passwordRule = [
  {
    required: true,
    message: 'Please enter your password'
  },
  {
    pattern: passwordRegex,
    message: 'Please enter at least 8 characters'
  }
];

export const confirmPasswordRule = [
  {
    required: true,
    message: 'Please confirm your password!',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject(new Error('The two passwords do not match!'));
    },
  }),
];
