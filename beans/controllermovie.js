var Item = require('./movie');
module.exports = class _Movie {
   constructor( ) {

   }
Guardar(req,res) {

 console.log(req);
	Item.create(
       
			{
    NAME: req.body.NAME,
    DURATIONMINUTES: req.body.DURATIONMINUTES,
    GENRE: req.body.GENRE,
    LANGUAGEAUDIO: req.body.LANGUAGEAUDIO,
    LANGUAGESUBS: req.body.LANGUAGESUBS,
    SYNOPSIS: req.body.SYNOPSIS,
    RATING: req.body.RATING,
    PRICE: req.body.PRICE,
    HOURSTART: req.body.HOURSTART,
    DATE: req.body.DATE,
    MINUTESTART: req.body.MINUTESTART,
    SEATS: req.body.SEATS,
    IMAGE: req.body.IMAGE,
    STATE: req.body.STATE
            }, 
				function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			}); 
}
    
    
   Modificar(req,res) {
    console.log(req.body.SEATS)
    console.log(req.body._id)
		Item.update( {_id : req.body._id},
					{$set:
			{
   NAME: req.body.NAME,
    DURATIONMINUTES: req.body.DURATIONMINUTES,
    GENRE: req.body.GENRE,
    LANGUAGEAUDIO: req.body.LANGUAGEAUDIO,
    LANGUAGESUBS: req.body.LANGUAGESUBS,
    SYNOPSIS: req.body.SYNOPSIS,
    RATING: req.body.RATING,
    PRICE: req.body.PRICE,
    HOURSTART: req.body.HOURSTART,
    DATE: req.body.DATE,
    MINUTESTART: req.body.MINUTESTART,
    SEATS: req.body.SEATS,
    IMAGE: req.body.IMAGE,
    STATE: req.body.STATE
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body._id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {
	Item.find({DATE:req.body.DATE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({NAME:req.body.NAME}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}


  
}
    
