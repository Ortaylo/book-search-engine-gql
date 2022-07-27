const mongoose = require('mongoose');
require('dotenv').config('../config.env');
MONGO_URL = process.env.MONGODB_URI ||'mongodb://localhost/googlebooks'
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
