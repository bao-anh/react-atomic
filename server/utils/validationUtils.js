const { check, body } = require('express-validator');

const checkEmail = [
  check('email', 'Email is invalid').isEmail(),
  check('email', 'Email is required').not().isEmpty(),
];

const checkPassword = [
  check('password', 'Password must contain at least 8 characters').isLength({ min: 8 }),
  check('password', 'Password is required').not().isEmpty(),
];

const checkConfirmPassword = [
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) throw new Error('Two passwords must be the same');
    return true;
  }),
  check('confirmPassword', 'Confirm password must contain at least 8 characters').isLength({ min: 8 }),
  check('confirmPassword', 'Confirm password is required').not().isEmpty(),
];

const registerUserValidation = () => ([
  ...checkEmail,
  ...checkPassword,
  ...checkConfirmPassword
]);

module.exports = { registerUserValidation };
