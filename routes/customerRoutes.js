const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
	app.post('/api/user', (req, res) => {
		console.log('req.body', req.body);
		res.send({ response: 'reached right endpoint' });
	});

	app.get('/api/get', (req, res) => {
		console.log('req.body', req.body);
		res.send({ response: 'this is a GET' });
	});
};
