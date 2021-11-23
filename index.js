const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
const path = require('path');
const PORT = process.env.PORT || 80;



dotenv.config();
app.use(express.json());



mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/api/posts', postsRoute);
app.use('/api/auth', authRoute);


//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  }
  
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
