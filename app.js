'use strict';

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();


const config = {
  appRoot: __dirname 
};


/**
* Middleware
* • CORS
* • Error Handling 
*
**/
import { cors } from './middleware/cors.middleware'
import { notFoundHandler, errorHandler } from './middleware/errors.middleware'

/**
*
* Swagger Express Server
*
**/
SwaggerExpress.create(config, function(err, swaggerExpress) {
	if (err) { 
		throw err; 
	}
	app.use(cors);
	swaggerExpress.register(app);
	app.use(notFoundHandler);
	app.use(errorHandler);

	var port = process.env.PORT || 10010;
	app.listen(port);
});

module.exports = app; /* for testing */