const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require('../constants/auth');

const auth = async (req, res, next) => {
  try {
    let decodedData;
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      decodedData = jwt.verify(token, TOKEN_KEY);
      req.userId = decodedData?.id;
    } else res.status(401).send('UnAuthorization');

    next();
  } catch (err) {
    res.status(401).send('UnAuthorization');
  }
};

module.exports = auth;
