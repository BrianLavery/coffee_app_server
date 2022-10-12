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
		age: {
			type: Number,
			default: 0,
			validate(value) {
				if (value < 0) {
					throw new Error('Age must be a positive number');
				}
			},
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
