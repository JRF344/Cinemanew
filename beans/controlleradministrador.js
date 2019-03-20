var Item = require('./administrador');
    let administradorinstanciado = new Item(); 
module.exports = class _Admin {
   constructor( ) {}
Guardar(req,res) {
    var claveysaltlocal = administradorinstanciado.setPassword(req.body._CLAVE);
    console.log(claveysaltlocal[0]);
   console.log(req.body.KEY);
    Item.create(
            {
   NAME: req.body._NAME,
    KEY: claveysaltlocal[0],
EMAIL: req.body._EMAIL,
    IMAGE: req.body._IMAGE,
    STATE: req.body._STATE,
             SALT: claveysaltlocal[1]   
            }, 
            function(err, item) {
                if (err)
                    {
                    res.send(err);}
          else{    Item.find(function(err, item) {
                    if (err)
                        res.send(err)
                  res.json(item);
                });}}); }   

    Login(req,res) {
        Item.find({EMAIL:req.body._EMAIL}, function(err, item) {
          
            if (err){
                res.send(err)}
            
        else{
            
              if(item.length ==0)
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"   }); 
                }
            else{
            
            console.log(item[0].KEY);
            if(administradorinstanciado.validPassword(req.body.KEY,item[0].KEY,item[0].SALT))
                {
                    item[0].SALT="YEET";
                    res.json(item); // devuelve todas las Personas en JSON  
                }
            else
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }}
        
        
        
        }
        
        
        
        
        });}


}