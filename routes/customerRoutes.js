module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send({ please: 'sign up for our information' });
	});
};
