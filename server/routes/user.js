const router = require('express').Router();
const { validationResult } = require('express-validator');
const Users = require('../models/users.model');
const { registerUserValidation } = require('../utils/validationUtils');
const { formatErrorsValidation } = require('../utils/formatUtils');

/*
Purpose: get all users
Method: get
Params: none
*/
router.get('/', async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

/*
Purpose: get all users
Method: get
Params: none
*/
router.post('/', registerUserValidation(), async (req, res) => {
  const { errors } = validationResult(req);
  const { email, password } = req.body;

  if (errors.length) return res.status(422).send({ errors: formatErrorsValidation(errors) });

  // Check if email is already existed
  const user = await Users.find({ email });
  if (user) {
    return res.status(422).send({
      errors: {
        email: 'Email is already exists'
      }
    });
  }

  const newUser = new Users({
    email,
    password
  });
  try {
    await newUser.save();
    return res.send('User registed successfully');
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
