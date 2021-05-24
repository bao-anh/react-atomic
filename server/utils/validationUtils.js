const { check, body } = require('express-validator');

const checkEmail = [
  check('email').isEmail().withMessage((value, { req }) => req.t('auth.login.error.email.notValid')),
  check('email').not().isEmpty().withMessage((value, { req }) => req.t('auth.login.error.email.isRequired')),
];

const checkPassword = [
  check('password').isLength({ min: 8 }).withMessage((value, { req }) => req.t('auth.login.error.password.notValid')),
  check('password').not().isEmpty().withMessage((value, { req }) => req.t('auth.login.error.password.isRequired')),
];

const checkConfirmPassword = [
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) throw new Error(req.t('auth.login.error.confirmPassword.notMatch'));
    return true;
  }),
  check('confirmPassword').isLength({ min: 8 })
    .withMessage((value, { req }) => req.t('auth.login.error.confirmPassword.notValid')),
  check('confirmPassword').not().isEmpty()
    .withMessage((value, { req }) => req.t('auth.login.error.confirmPassword.isRequired')),
];

const loginUserValidation = [
  ...checkEmail,
  ...checkPassword
];

const registerUserValidation = [
  ...checkEmail,
  ...checkPassword,
  ...checkConfirmPassword
];

module.exports = { registerUserValidation, loginUserValidation };
