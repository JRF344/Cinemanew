
var controllermovie = require('./controllermovie.js');
var controllerAdministrador = require('./controlleradministrador.js');
module.exports = function(app) {

    
 

	
    var classmovie=new controllermovie();
	app.post('/api/newmovie', classmovie.Guardar);
	app.post('/api/editmovie', classmovie.Modificar);
	app.post('/api/deletemovie', classmovie.Eliminar);
	app.post('/api/selectmovie', classmovie.Seleccionartodos);
	app.post('/api/selectmoviebydate', classmovie.Seleccionarporfecha);
	app.post('/api/selectmoviebyid', classmovie.Seleccionarporid);
	app.post('/api/selectmoviebyname', classmovie.Seleccionarpornombre);
    
    var claseadm = new controllerAdministrador();
	app.post('/api/nuevoadm',  claseadm.Guardar);    
	app.post('/api/loginadm',  claseadm.Login);
    //

    
   
	app.get('*', function(req, res) {//localhost:8080
		res.sendfile('./login.html'); // Carga única de la vista
	});
    
    
    
    
};