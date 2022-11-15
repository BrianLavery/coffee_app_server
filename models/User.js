const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		coffee: {
			type: String,
			required: false,
			trim: true,
			lowercase: true,
		},
		feedback: {
			type: String,
			required: false,
			maxLength: 150,
			trim: true,
			lowercase: true,
		},
		ipAddress: {
			type: String,
			trim: true,
		},
		ipCity: {
			type: String,
			trim: true,
		},
		ipCountry: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true, // By default is set to false
	}
);

mongoose.model('users', userSchema);
