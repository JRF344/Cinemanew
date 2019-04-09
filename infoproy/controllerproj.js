//VARIABLES PRESENT IN THIS FILE:
/*
NAME project name
DESC project description
ID1 student #1's ID
ID2 student #1's ID
ID3 student #1's ID
ID4 student #1's ID
IMAGE project image
VOTE number of votes
*/
var Item = require('./proj');
module.exports = class _Proj {
   constructor( ) {}
Save(req,res) {

 console.log(req);
	Item.create(
       
			{
    NAME: req.body.NAME,
    DESC: req.body.DESC,
    ID1: req.body.ID1,
    ID2: req.body.ID2,
    ID3: req.body.ID3,
    ID4: req.body.ID4,
    IMAGE: req.body.IMAGE,
    VOTE: req.body.VOTE
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
    
    
   /*Modificar(req,res) {
    console.log(req.body.SEATS)
    console.log(req.body._id)
		Item.update( {_id : req.body._id},
					{$set:
			{
    NAME: req.body.NAME,
    DESC: req.body.DESC,
    ID1: req.body.ID1,
    ID2: req.body.ID2,
    ID3: req.body.ID3,
    ID4: req.body.ID4,
    IMAGE: req.body.IMAGE,
    VOTE: req.body.VOTE,
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
    
    
    
}*/ 


  
}
    
