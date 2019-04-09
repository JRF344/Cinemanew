var controllerproj = require('./controllerproj.js');
//Takes program to the project controller file
var controlleradm = require('./controlleradm.js');
//Takes program to the admin controller file
module.exports = function(app) {

    
 

	
    var classproj=new controllerproj();
	app.post('/api/newproj', classproj.Save);
    // project functions

    var classadm=new controlleradm();
	app.post('/api/newadm',  classadm.Save);    
	app.post('/api/logadm',  classadm.Login);
	//admin functions

    
   
	app.get('*', function(req, res) {//localhost:8080
		res.sendfile('./signup.html'); // Carga única de la vista
	});

    
    
    
};