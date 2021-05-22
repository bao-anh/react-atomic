const express = require('express');
const cors = require('cors');
const { userRouter, authRouter } = require('./routes');
const { auth } = require('./middlewares');

require('dotenv').config();
require('./db');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Router
router.use('/auth', authRouter);
router.use('/users', auth, userRouter);

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
