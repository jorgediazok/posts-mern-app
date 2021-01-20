const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

//Set app
const app = express();

//Middlewares

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.static('client/build/'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//Using routes (all routes will start with posts)

app.use('/api', postRoutes);
app.use('/api', userRoutes);

//MongoDB

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log('DB is connected!!'))
  .catch((err) => console.log(err));

//Server

const PORT = process.env.PORT || 5000;
app.listen(PORT);
