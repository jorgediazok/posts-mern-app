import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import path from 'path';
import serveStatic from 'serve-static';
const __dirname = path.resolve();

dotenv.config();

//Set app
const app = express();

//Middlewares

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(serveStatic(path.join(__dirname, '/client')));
console.log(__dirname);

//Using routes (all routes will start with posts)

app.use('/posts', postRoutes);

//Heroku
app.get('/', (req, res) => {
  res.send('Hello to Moments Api');
});

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
