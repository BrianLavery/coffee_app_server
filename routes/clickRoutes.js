const mongoose = require('mongoose');

const Click = mongoose.model('clicks');

module.exports = (app) => {
	app.post('/api/click', async (req, res) => {
		const { ipAddress, ipCity, ipCountry } = req.body;

		const click = await new Click({ ipAddress, ipCity, ipCountry }).save();
	});
};
