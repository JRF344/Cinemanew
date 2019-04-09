//VARIABLES PRESENT IN THIS FILE:
/*
localpassnsalt password&salt code
NAME 
STUDID
PASS
IMAGE
SALT
adm
*/
var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var adm = new Schema({
    NAME: String,
    STUDID: Number,
    PASS: String,
    IMAGE: String,
    SALT: String
});
adm.methods.setPassword = function(password) { 
         console.log(password);
 // creating a unique SALT for a particular user 
   var SALT = crypto.randomBytes(16).toString('hex'); 
  
    // hashing user's SALT and password with 1000 iterations, 
   // 64 length and sha512 digest 
    console.log(password);
    var localpassnsalt =[]
   // this.PASS = crypto.pbkdf2Sync(password, this.SALT,  
  //  1000, 64, 'sha512').toString('hex'); 
    localpassnsalt.push(crypto.pbkdf2Sync(password, SALT,1000, 64, 'sha512').toString('hex')); //ERR on pbkdf2Sync node server.js cmd
    localpassnsalt.push(SALT);
    
    return localpassnsalt; 
}; 

adm.methods.validPassword = function(password,goodpass,SALT) { 
    console.log(this.PASS);
       console.log(password);
       console.log(goodpass);
 
    //hashing algorythm
    var hash = crypto.pbkdf2Sync(password,SALT, 1000, 64, 'sha512').toString('hex'); 
    return goodpass === hash; 
};
         module.exports = mongoose.model('Adm',adm)