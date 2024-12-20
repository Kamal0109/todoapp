const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

// Load environment variables before using them
dotenv.config({
  path: './config/config.env',
});

app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
  extended : true
}));


// Connect to MongoDB
connectDB();

// Example route
// 


// https://localhost:3000/api/todo/auth/register
app.use('/api/todo/auth', require('./routes/user'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.red.underline.bold)
);
 