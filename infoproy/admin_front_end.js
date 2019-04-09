  //VARIABLES PRESENT IN THIS FILE:
/*
NAME student name
STUDID student id
PASS student password
IMAGE student pfp 
*/
class _Adm {
  constructor(
    _id,
    NAME,
    STUDID,
    PASS,
    IMAGE,
            ) {
      this._id=_id;
      this.NAME=NAME;
      this.STUDID=STUDID;
      this.PASS=PASS;
      this.IMAGE=IMAGE;
    }

Save() {
  var objecttosend = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) { //ERR
  // Do the usual XHR stuff     
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/newadm');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
        }
        else{
           reject(xhr); 
        }
      };
    xhr.send(JSON.stringify(objecttosend));   //ERR
}
catch(err) {
     reject(err.message);
   }
 });
}
    
 Login() {
       var objecttosend = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/logadm');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          }
          else{
            reject(xhr); 
          }
        };
xhr.send(JSON.stringify(objecttosend));   
          }
          catch(err) {
              reject(err.message);
              }
        });
    }
} 
//turns images into text/live image preview before saving
let base64img = "";
  $("#imga").change(function(){
  readURL(this);
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      base64img=e.target.result;
      $('#imga').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imgInp").change(function() {
  readURL(this);
});
var votes = new Object();
votetot = 0;

//saves the new admin profile
function buttonsave(){
  var curradm = new _Adm(0,
  document.getElementById("NAME").value,
  document.getElementById("STUDID").value,
  document.getElementById("PASS").value,
  base64img,


  
);
curradm.Save().then(function(response) { //ERR
  console.log("Success!", response);
  alert("Guardado con exito");            
}, function(error) {
  console.error("Failed!", error); //ERR
  alert("Error " + error);
  });                                       
}