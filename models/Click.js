const mongoose = require('mongoose');
const { Schema } = mongoose;

const clickSchema = new Schema(
	{
		ipAddress: {
			type: String,
			required: true,
			trim: true,
		},
		ipCity: {
			type: String,
			required: true,
			trim: true,
		},
		ipCountry: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true, // By default is set to false
	}
);

mongoose.model('clicks', clickSchema);
