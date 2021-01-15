const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path: './config/config.env'});

// get router file
const transactions = require('./routes/transactions');

// initalize the express app
const app = express();

// mount and connect the router - check the link in postman
app.use('/api/v1/transactions', transactions);

// access port 5000
const PORT = process.env.PORT || 5000;

// run the server
app.listen(PORT, console.log(`Server running in  ${process.env.NODE_ENV} in port ${PORT}` .yellow.bold));