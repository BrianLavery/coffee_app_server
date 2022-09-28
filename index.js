const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // must be executed before routes
const customerRoutes = require('./routes/customerRoutes');

mongoose.connect(keys.mongoURI);

const app = express();
customerRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
