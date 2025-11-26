require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect(process.env.mongo);
  console.log(`Mongoose is up and running`);
};

const disconnect = async () => {
  await mongoose.connection.close();
};

const findUser = async (obj) => {
  User.findOne(obj);
};
const saveUser = async (newUser) => {
  return await newUser.save();
};
module.exports = { connect, disconnect, findUser, saveUser };
