const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const avatarDefault =
	'https://st3.depositphotos.com/19428878/35584/v/450/depositphotos_355846362-stock-illustration-default-avatar-profile-icon-social.jpg';

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default: avatarDefault,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
		},
		versionKey: false,
	}
);

module.exports = model('User', userSchema);
