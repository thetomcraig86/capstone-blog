const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
const path = require('path');

dotenv.config();
app.use(express.json());

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/api/posts', postsRoute);
app.use('/api/auth', authRoute);

app.listen('5000', () => {
  console.log('Backend is running.');
});
