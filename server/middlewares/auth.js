const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../constants/auth');

const auth = async (req, res, next) => {
  try {
    let decodedData;
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      decodedData = jwt.verify(token, SECRET_KEY);
      req.userId = decodedData?.id;
      next();
    }
    return res.status(401).send('UnAuthorization');
  } catch (err) {
    return res.status(401).send('UnAuthorization');
  }
};

module.exports = auth;
