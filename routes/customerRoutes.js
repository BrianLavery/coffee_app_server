const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
	app.post('/api/user', async (req, res) => {
		const { name, email } = req.body;

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res.send({ result: `We got an existing user ${existingUser}` });
		} else {
			const user = await new User({ name, email }).save();
			res.send({ result: `A new user was created ${user}` });
		}
	});
};
