const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
const multer = require('multer');
const path = require('path');
const PORT = process.env.PORT || 5000;



dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

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

app.listen('5000', () => {
  console.log('Backend is running.');
});

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('../client/build'))
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));