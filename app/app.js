const express = require('express');
const cors = require('cors');
const bookRouter = require('../user/bookRouter');
const { connect } = require('../db/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'API Sevice is Up',
  });
  next();
});

app.use('/users', bookRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status || 500,
  });
});

connect();

module.exports = app;
