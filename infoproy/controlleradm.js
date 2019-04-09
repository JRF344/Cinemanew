//VARIABLES PRESENT IN THIS FILE:
/*
localpassnsalt
NAME
STUDID
PASS
IMAGE
SALT
*/
var Item = require('./adm');
let curradm = new Item(); 
//creates all required variables
module.exports = class _Adm {
   constructor( ) {}
   //profile saving function
Save(req,res) {
    var localpassnsalt = curradm.setPassword(req.body.PASS); //ERR on setPassword node server.js cmd
    console.log(localpassnsalt[0]);
   console.log(req.body.PASS);
    Item.create(
            {
    NAME: req.body.NAME,
    STUDID: req.bodySTUDID,
    PASS: localpassnsalt[0], 
    IMAGE: req.body.IMAGE,
    SALT: localpassnsalt[1]    
            }, 
            function(err, item) {
                if (err)
                    {
                    res.send(err);}
          else{    Item.find(function(err, item) {
                    if (err)
                        res.send(err)
                  res.json(item);
                });
      }
      }
            ); 
}   
//login data verification function
    Login(req,res) {
        Item.find({STUDID:req.body._STUDID}, function(err, item) {
            if (err){
                res.send(err)}
        else{
              if(item.length ==0){
                    res.status(400).send({ 
                    message : "Datos incorrectos"   }); 
                }
            else{
            
            console.log(item[0].PASS);
            if(curradm.validPassword(req.body.PASS,item[0].PASS,item[0].SALT)){
                    item[0].SALT="YEET";
                    res.json(item); // devuelve todas las Personas en JSON  
                }
            else{
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }
            }
        }
    });
    }
}