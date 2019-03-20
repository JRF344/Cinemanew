var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var movie = new Schema({
	NAME: String,
	DURATIONMINUTES: Number,
	GENRE: String,
	LANGUAGEAUDIO: String,
	LANGUAGESUBS: String,
	SYNOPSIS: String,
	RATING: String,
	PRICE: Number,
	HOURSTART: Number,
	DATE: Date,
	MINUTESTART: Number,
		SEATS: {
			A1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			A2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			A3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			A4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			A5: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			A6: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},


			B1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			B2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			B3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			B4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			B5: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			B6: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			C1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			C2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			C3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			C4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			C5: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			C6: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			D1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			D2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			D3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			D4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			D5: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			E1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			E2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			E3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			E4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			F1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			F2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			F3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			F4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			G1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			G2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			G3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			G4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},



			H1: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			H2: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			H3: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			H4: {
				NAMESTUDENT: String,
				SECTION: String,
				ID: Number,
			},
			IMAGE: String,
			STATE: Number
		},
    IMAGE:String,
    STATE:String
});



module.exports=mongoose.model('Movie', movie);