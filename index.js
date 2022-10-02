const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // must be executed before routes
const customerRoutes = require('./routes/customerRoutes');

mongoose.connect(keys.mongoURI);

const app = express();
// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

customerRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
