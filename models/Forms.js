const mongoose = require('mongoose');

const formsSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	customFields: {
		type: Map,
		of: mongoose.Schema.Types.Mixed // This allows any type of value (String, Number, etc.)
	}
}, { strict: false });

module.exports = Forms = mongoose.model('forms', formsSchema)