const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
	app.post('/api/user', async (req, res) => {
		const { name, email, ipAddress, ipCity, ipCountry } = req.body;

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res.send({ result: `We have already received an application from you prior` });
		} else {
			const user = await new User({ name, email, ipAddress, ipCity, ipCountry }).save();
			res.send({
				result: `We have received your application and will be in touch with further pre-order details shortly`,
			});
		}
	});
};
