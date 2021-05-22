const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes');

require('dotenv').config();
require('./db');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Router
router.use('/users', userRouter);

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});