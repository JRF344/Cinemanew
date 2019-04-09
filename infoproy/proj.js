//VARIABLES PRESENT IN THIS FILE:
/*
NAME
DESC
ID1
ID2
ID3
ID4
IMAGE
VOTE
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var proj = new Schema({
    NAME: String,
    DESC: String,
	ID1: Number,
	ID2: Number,
	ID3: Number,
    ID4: Number,
    IMAGE: String,
	VOTE: Number
})
         module.exports = mongoose.model('Proj',proj)