const router = require('express').Router();
const Users = require('../models/users.model');

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
    res.status(500).json(err);
  }
});

module.exports = router;
