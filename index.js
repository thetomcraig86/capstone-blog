const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRoute = require('./api/routes/posts');
const authRoute = require('./api/routes/auth');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/api/images/")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/posts', postsRoute);
app.use('/api/auth', authRoute);



if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

