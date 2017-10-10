'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conexão com mongoDB
mongoose.connect(config.connectionString, { useMongoClient: true }).then(db => {
  console.log('connectou no banco');
});

// BodyParser
app.use(
  bodyParser.json({
    limit: '5mb'
  })
);

// Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Rotas aplicação
const indexRoute = require('./routes/index.route');
const productRoute = require('./routes/product.route');
const customerRoute = require('./routes/customer.route');
const orderRoute = require('./routes/order.route');

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
