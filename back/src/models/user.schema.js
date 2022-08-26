const mongoose = require('mongoose');
const { Schema, model } = mongoose;

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
			default: 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360',
		},
		noteId: { type: Schema.Types.ObjectId, ref: 'notes' }, // ref : "Note"
	},
	{
		timestamps: {
			createdAt: 'created_at',
		},
	}
);

module.exports = model('User', userSchema);
