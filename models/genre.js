let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
	{
		name: { type: String, required: true, min: 3, max: 100 },
		family_name: { type: String, required: true, max: 100 },
		date_of_birth: { type: Date },
		date_of_death: { type: Date },
	}
);

// Virtual for author's URL
GenreSchema
	.virtual('url')
	.get(function () {
		return '/catalog/genre/' + this._id;
	});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);