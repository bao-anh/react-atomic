const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connected successfully');
});
