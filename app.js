'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var db = require('./mock/db')();

module.exports = app; // for testing

var config = {
  appRoot: __dirname 
};


const middleware = {
	gw: function(req, res, next){
		console.log('\n\n\n ---> GW', 
			{'req.swagger': req.swagger}
		)
		next();
	},
	errorHandler: function(err, req, res, next) {
	    let operationId = req.swagger.operation.operationId;
	    err.operationId = operationId; /* method id */ 
	    res.status(err.code | 400).json(err);
	}
}
function gw(req, res, next){
	console.log('\n\n\n ---> middleware.GW', 
		{
			'x-microservices': req.swagger.operation['x-microservices']
		}
	)
	next();
}


SwaggerExpress.create(config, function(err, swaggerExpress) {
	if (err) { 
		throw err; 
	}


	swaggerExpress.register(app);
	app.use(gw);
	// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	app.use(middleware.errorHandler);

	var port = process.env.PORT || 10010;
	app.listen(port);
});
