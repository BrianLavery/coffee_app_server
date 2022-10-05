const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // must be executed before routes
require('./models/Click'); // must be executed before routes
const customerRoutes = require('./routes/customerRoutes');
const clickRoutes = require('./routes/clickRoutes');
const res = require('express/lib/response');

mongoose.connect(keys.mongoURI);

const app = express();

// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

customerRoutes(app);
clickRoutes(app);

// Code below only runs on production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build')); // If a request is coming then look for specific answer in the 'client/build' directory

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // If someone makes request for a route we don't know then serve up this html document
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
