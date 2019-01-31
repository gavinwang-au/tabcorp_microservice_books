'use strict';

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
import { DatabaseError, ConfigError } from './api/shared/Errors'


const config = {
  appRoot: __dirname 
};

/**
* Env 
**/
const env = require('dotenv').config({ path: './.env'});
if (env.error) {
	throw new ConfigError(env.error.message, 'env');
}


/**
* Middleware
* • CORS
* • Error Handling 
**/
import { cors } from './api/middleware/cors.middleware'
import { notFoundHandler, errorHandler } from './api/middleware/errors.middleware'

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