require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log(`Mongoose is up and running`);
};

module.exports = { connect };
