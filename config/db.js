const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Do not include useNewUrlParser or useUnifiedTopology as they are no longer necessary
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
  } catch (err) {
    console.error('Error connecting to MongoDB'.red, err);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
