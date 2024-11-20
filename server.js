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

// Connect to MongoDB
connectDB();

// Example route
app.get('/todo', (req, res) => {
  res.status(200).json({
    name: 'Kamal',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.red.underline.bold)
);
 