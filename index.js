// External libraries
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Internal imports
const keys = require('./config/keys');
require('./models/User'); // must be executed before routes
require('./models/Click'); // must be executed before routes
const customerRoutes = require('./routes/customerRoutes');
const clickRoutes = require('./routes/clickRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
customerRoutes(app);
clickRoutes(app);

// Force https / SSL: https://stackoverflow.com/questions/58354546/force-ssl-with-nodejs-and-reactjs , https://stackoverflow.com/questions/7185074/heroku-nodejs-http-to-https-ssl-forced-redirect?answertab=modifieddesc#tab-top
const environment = process.env.NODE_ENV;

app.use((req, res, next) => {
	if (req.header('x-forwarded-proto') !== 'https' && environment !== 'development') {
		return res.redirect(`https://${req.header('host')}${req.url}`);
	}

	next();
});

// Code below only runs on production
if (environment === 'production') {
	app.use(express.static('client/build')); // If a request is coming then look for specific answer in the 'client/build' directory

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // If someone makes request for a route we don't know then serve up this html document
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
