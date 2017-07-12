const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/stats');
const Stats = require('./models/stats.js');
const statsRouter = require('./routes/api');
const app = express();

// view engine setup
// app.engine('mustache', mustache());
// app.set('view engine', 'mustache');
// app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', statsRouter);
app.listen(3000)
