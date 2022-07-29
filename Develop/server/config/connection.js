const mongoose = require('mongoose');
require('dotenv').config('../config.env');
console.log(process.env.MONGODB_URI)
MONGO_URL = process.env.MONGODB_URI ||'mongodb://localhost/googlebooks'
console.log(MONGO_URL)
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
