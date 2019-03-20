class _Movie {
      moviesbydateandyear(month,year)
    {
      var pack = this;
      var filteredmovievector = [];
      return new Promise(function(resolve, reject){
        try{
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:8080/api/selectmovie');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload=function() {
            if(xhr.status === 200){
              var movies=JSON.parse(xhr.responseText);
              for(var element in movies){
                var moviedate=new Date(movies[element].DATE);
                if((moviedate.getMonth()+1==month) &&(moviedate.getFullYear()==year)){
              filteredmovievector.push(movies[element]);
                }
              }
              resolve(filteredmovievector);
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
    DURATIONMINUTES,
    GENRE,
    LANGUAGEAUDIO,
    LANGUAGESUB,
    SYNOPSIS,
    RATING,
    HOURSTART,
    DATE,
    PRICE,
    MINUTESTART,
    SEATS,
    IMAGE,
    STATE
            ) {
    this._id = _id;
    this.NAME = NAME;
    this.DURATIONMINUTES=DURATIONMINUTES;
    this.GENRE=GENRE;
    this.LANGUAGEAUDIO=LANGUAGEAUDIO;
    this.LANGUAGESUB=LANGUAGESUB;
    this.SYNOPSIS=SYNOPSIS;
    this.RATING=RATING;
    this.PRICE=PRICE;
    this.HOURSTART=HOURSTART;
    this.DATE=DATE;
    this.MINUTESTART=MINUTESTART;
    this.SEATS=SEATS;
    this.IMAGE=IMAGE;
    this.STATE=STATE;
   }
Guardar() {
   var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/newmovie');
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
    
 Modificar() {
	
       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/editmovie');
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
    
    Eliminar() {

       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/deletemovie');
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
Seleccionartodos() {
	
       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmovie');
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
    
    Seleccionarporfecha() {

       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebydate');
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
    
    Seleccionarporid() {
	
      var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebyid');
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
    
    Seleccionarpornombre() {

    
    
      var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebyname');
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
          
          
          
}//err=error
catch(err) {
     reject(err.message);

}
    });
    
}
}
            
             let imagenenbase64 = "";

      $("#imgmovie").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
    
    
            
            //seat data
           var seats = new Object();
            var seatA1 = new Object();
            seatA1.NAMESTUDENT = null;
            seatA1.SECTION=null;
            seatA1.ID=null;
            seats.A1= seatA1;
            
            
            
             var seatA2 = new Object();
            seatA2.NAMESTUDENT = null;
            seatA2.SECTION=null;
            seatA2.ID=null;
            seats.A2= seatA2;
             
             var seatA3 = new Object();
            seatA3.NAMESTUDENT = null;
            seatA3.SECTION=null;
            seatA3.ID=null;
            seats.A3= seatA3;
            
            
            
             var seatA4 = new Object();
            seatA4.NAMESTUDENT = null;
            seatA4.SECTION=null;
            seatA4.ID=null;
            seats.A4= seatA4;
            
            var seatA5 = new Object();
            seatA5.NAMESTUDENT = null;
            seatA5.SECTION=null;
            seatA5.ID=null;
            seats.A5= seatA5;
            
             var seatA6 = new Object();
            seatA6.NAMESTUDENT = null;
            seatA6.SECTION=null;  
            seatA6.ID=null;
            seats.A6= seatA6;



            var seatB1 = new Object();
            seatB1.NAMESTUDENT = null;
            seatB1.SECTION=null;
            seatB1.ID=null;
            seats.B1= seatB1;
            
            
            
             var seatB2 = new Object();
            seatB2.NAMESTUDENT = null;
            seatB2.SECTION=null;
            seatB2.ID=null;
            seats.B2= seatB2;

            var seatB3 = new Object();
            seatB3.NAMESTUDENT = null;
            seatB3.SECTION=null;
            seatB3.ID=null;
            seats.B3= seatB3;
            
            
            
             var seatB4 = new Object();
            seatB4.NAMESTUDENT = null;
            seatB4.SECTION=null;
            seatB4.ID=null;
            seats.B4= seatB4;

            var seatB5 = new Object();
            seatB5.NAMESTUDENT = null;
            seatB5.SECTION=null;
            seatB5.ID=null;
            seats.B5= seatB5;
            
            
            
           

            var seatC1 = new Object();
            seatC1.NAMESTUDENT = null;
            seatC1.SECTION=null;
            seatC1.ID=null;
            seats.C1= seatC1;
            
            
            
             var seatC2 = new Object();
            seatC2.NAMESTUDENT = null;
            seatC2.SECTION=null;
            seatC2.ID=null;
            seats.C2= seatC2;
             
             var seatC3 = new Object();
            seatC3.NAMESTUDENT = null;
            seatC3.SECTION=null;
            seatC3.ID=null;
            seats.C3= seatC3;
            
            
            
             var seatC4 = new Object();
            seatC4.NAMESTUDENT = null;
            seatC4.SECTION=null;
            seatC4.ID=null;
            seats.C4= seatC4;
            
            var seatC5 = new Object();
            seatC5.NAMESTUDENT = null;
            seatC5.SECTION=null;
            seatC5.ID=null;
            seats.C5= seatC5;
            
            
            
             var seatC6 = new Object();
            seatC6.NAMESTUDENT = null;
            seatC6.SECTION=null;
            seatC6.ID=null;
            seats.C6= seatC6;

            var seatD1 = new Object();
            seatD1.NAMESTUDENT = null;
            seatD1.SECTION=null;
            seatD1.ID=null;
            seats.D1= seatD1;
            
            
            
             var seatD2 = new Object();
            seatD2.NAMESTUDENT = null;
            seatD2.SECTION=null;
            seatD2.ID=null;
            seats.D2= seatD2;

            var seatD3 = new Object();
            seatD3.NAMESTUDENT = null;
            seatD3.SECTION=null;
            seatD3.ID=null;
            seats.D3= seatD3;
            
            
            
             var seatD4 = new Object();
            seatD4.NAMESTUDENT = null;
            seatD4.SECTION=null;
            seatD4.ID=null;
            seats.D4= seatD4;

            var seatD5 = new Object();
            seatD5.NAMESTUDENT = null;
            seatD5.SECTION=null;
            seatD5.ID=null;
            seats.D5= seatD5;
            
            
            var seatE1 = new Object();
            seatE1.NAMESTUDENT = null;
            seatE1.SECTION=null;
            seatE1.ID=null;
            seats.E1= seatE1;
            
            
            
             var seatE2 = new Object();
            seatE2.NAMESTUDENT = null;
            seatE2.SECTION=null;
            seatE2.ID=null;
            seats.E2= seatE2;

            var seatE3 = new Object();
            seatE3.NAMESTUDENT = null;
            seatE3.SECTION=null;
            seatE3.ID=null;
            seats.E3= seatE3;
            
            
            
             var seatE4 = new Object();
            seatE4.NAMESTUDENT = null;
            seatE4.SECTION=null;
            seatE4.ID=null;
            seats.E4= seatE4;

            var seatF1 = new Object();
            seatF1.NAMESTUDENT = null;
            seatF1.SECTION=null;
            seatF1.ID=null;
            seats.F1= seatF1;
            
            
            
             var seatF2 = new Object();
            seatF2.NAMESTUDENT = null;
            seatF2.SECTION=null;
            seatF2.ID=null;
            seats.F2= seatF2;

            var seatF3 = new Object();
            seatF3.NAMESTUDENT = null;
            seatF3.SECTION=null;
            seatF3.ID=null;
            seats.F3= seatF3;
            
            
            
             var seatF4 = new Object();
            seatF4.NAMESTUDENT = null;
            seatF4.SECTION=null;
            seatF4.ID=null;
            seats.F4= seatF4;

            var seatG1 = new Object();
            seatG1.NAMESTUDENT = null;
            seatG1.SECTION=null;
            seatG1.ID=null;
            seats.G1= seatG1;
            
            
            
             var seatG2 = new Object();
            seatG2.NAMESTUDENT = null;
            seatG2.SECTION=null;
            seatG2.ID=null;
            seats.G2= seatG2;

            var seatG3 = new Object();
            seatG3.NAMESTUDENT = null;
            seatG3.SECTION=null;
            seatG3.ID=null;
            seats.G3= seatG3;
            
            
            
             var seatG4 = new Object();
            seatG4.NAMESTUDENT = null;
            seatG4.SECTION=null;
            seatG4.ID=null;
            seats.G4= seatG4;

            var seatH1 = new Object();
            seatH1.NAMESTUDENT = null;
            seatH1.SECTION=null;
            seatH1.ID=null;
            seats.H1= seatH1;
            
            
            
             var seatH2 = new Object();
            seatH2.NAMESTUDENT = null;
            seatH2.SECTION=null;
            seatH2.ID=null;
            seats.H2= seatH2;

            var seatH3 = new Object();
            seatH3.NAMESTUDENT = null;
            seatH3.SECTION=null;
            seatH3.ID=null;
            seats.H3= seatH3;
            
            
            
             var seatH4 = new Object();
            seatH4.NAMESTUDENT = null;
            seatH4.SECTION=null;
            seatH4.ID=null;
            seats.H4= seatH4;
            
 var seatB6 = new Object();
            seatB6.NAMESTUDENT = null;
            seatB6.SECTION=null;
            seatB6.ID=null;
            seats.B6= seatB6;
            
        function botonguardarclick(){
                var peliculainstanciada = new _Movie(
                0, //gets data from the html
               document.getElementById("name").value,
               document.getElementById("duration").value,
               document.getElementById("genre").value,
               document.getElementById("languageaudio").value,
               document.getElementById("languagesub").value,
               document.getElementById("synopsis").value,
               document.getElementById("rating").value,
                document.getElementById("hour").value,
                  document.getElementById("date").value,
               document.getElementById("price").value,
               document.getElementById("minute").value,
         seats,
          imagenenbase64,
         document.getElementById("state").value
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) {
  console.log("Success!", response); //action complete
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);  //process failure
             alert("Error " + error);
           
});                                       
                                                        
            }
