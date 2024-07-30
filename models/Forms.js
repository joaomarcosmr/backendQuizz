const mongoose = require('mongoose');
const User = require('./User');

const formsSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	name: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	customFields: {
		type: Map,
		of: mongoose.Schema.Types.Mixed
	},
	status: {
		type: String,
		enum: ['new', 'sent', 'backlog'],
		default: 'new'
	}
}, { strict: false });

module.exports = mongoose.model('Form', formsSchema);
