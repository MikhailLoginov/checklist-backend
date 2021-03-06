const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const { users, activities } = require('./api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);
app.use('/activity', activities);

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const server = http.createServer(app);

const port = process.env.PORT || 3000;
 
server.listen(port, () => console.log(`Server started on port ${port}`));
