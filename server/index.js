const express = require('express');
const cors = require('cors');
const { userRouter, authRouter } = require('./routes');
const { auth } = require('./middlewares');
const { i18n, i18nextMiddleware } = require('./languages/i18n');

require('dotenv').config();
require('./db');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(i18nextMiddleware.handle(i18n));

// Router
router.use('/auth', authRouter);
router.use('/users', auth, userRouter);

app.use('/api', router);

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
