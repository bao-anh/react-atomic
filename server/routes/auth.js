const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Users = require('../models/users.model');
const { registerUserValidation } = require('../utils/validationUtils');
const { formatErrorsValidation } = require('../utils/formatUtils');
const { TIME_TO_LIVE, SECRET_KEY } = require('../constants/auth');

/*
Purpose: login
Method: post
Params: ['email', 'password']
*/
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    // Check if email is exist or not
    if (!user) {
      return res.status(404).send({
        errors: {
          email: 'Email doesnt exists'
        }
      });
    }
    // Check if password is correct or not
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(404).send({
        errors: {
          password: 'Password doesnt correct'
        }
      });
    }
    // Create token
    const token = jwt.sign({ email, id: user._id }, SECRET_KEY, { expiresIn: TIME_TO_LIVE });
    return res.send({ access_token: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});

/*
Purpose: register new user
Method: post
Params: ['email', 'password', 'confirmPassword']
*/
router.post('/register', registerUserValidation(), async (req, res) => {
  const { errors } = validationResult(req);
  const { email, password } = req.body;

  if (errors.length) return res.status(422).send({ errors: formatErrorsValidation(errors) });

  // Check if email is already existed
  const user = await Users.findOne({ email });
  if (user) {
    return res.status(422).send({
      errors: {
        email: 'Email is already exists'
      }
    });
  }
  // Create new user
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new Users({
      email,
      password: hashedPassword
    });
    await newUser.save();
    // Create token
    const token = jwt.sign({ email, id: newUser._id }, SECRET_KEY, { expiresIn: TIME_TO_LIVE });
    return res.send({ access_token: token, alert: 'Register successfuly' });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
