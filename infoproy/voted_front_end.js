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
base64img image converted into text
*/
class _Proj {
      projbydateandyear(month,year)
    {
      var pack = this;
      var filteredvector = [];
      return new Promise(function(resolve, reject){
        try{
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:8080/api/select');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload=function() {
            if(xhr.status === 200){
              var proj=JSON.parse(xhr.responseText);
              for(var element in proj){
                var projdate=new Date(proj[element].DATE);
                if((projdate.getMonth()+1==month) &&(projdate.getFullYear()==year)){
              filteredvector.push(proj[element]);
                }
              }
              resolve(filteredvector);
            }
            else{
              reject(xhr);
            }
          };
          xhr.send(JSON.stringify(pack));
        }
        catch(err){
          reject(err.message);
        }
      });
}
   constructor(
    _id, 
    NAME,
    DESC,
    ID1,
    ID2,
    ID3,
    ID4,
    IMAGE,
    VOTE
            ) {
    this._id = _id;
    this.NAME=NAME;
    this.DESC=DESC;
    this.ID1=ID1;
    this.ID2=ID2;
    this.ID3=ID3;
    this.ID4=ID4;
    this.IMAGE=IMAGE;
    this.VOTE=VOTE;
   }
Save() {
   var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/newproj');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}   
/*Selectall() {
	
       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/select');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}*/
    
    
}
//image processor/live preview
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
//saves the project
function saveclick(){
                var instancedadd = new _Proj(
                0, //gets data from the html
               document.getElementById("NAME").value,
               document.getElementById("DESC").value,
               document.getElementById("ID1").value,
               document.getElementById("ID2").value,
               document.getElementById("ID3").value,
               document.getElementById("ID4").value,
               base64img,
               votes=0
                );
                                                        
                instancedadd.Save().then(function(response) {
  console.log("Success!", response); //action complete
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);  //process failure
             alert("Error " + error);
           
});                                       
                                                        
            }
