const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
	app.get('/', (req, res) => {
		User.findOne({ email: 'brian.lavery@gmail.com' }).then((existingUser) => {
			if (existingUser) {
				res.send({ result: `We got an existing user ${existingUser.name}` });
			} else {
				new User({ email: 'brian.lavery@gmail.com', name: 'brian', age: 32 }).save();
				res.send({ result: `A new user was created` });
			}
		});
	});
};
