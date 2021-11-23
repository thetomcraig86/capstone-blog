const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
const path = require('path');

dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/api/posts', postsRoute);
app.use('/api/auth', authRoute);

app.listen('5000', () => {
  console.log('Backend is running.');
});