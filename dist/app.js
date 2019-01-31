'use strict';

var _Errors = require('./api/shared/Errors');

var _cors = require('./api/middleware/cors.middleware');

var _errors = require('./api/middleware/errors.middleware');

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();


var config = {
	appRoot: __dirname
};

/**
* Env 
**/
var env = require('dotenv').config({ path: './.env' });
if (env.error) {
	throw new _Errors.ConfigError(env.error.message, 'env');
}

/**
* Middleware
* • CORS
* • Error Handling 
**/


/**
*
* Swagger Express Server
*
**/
SwaggerExpress.create(config, function (err, swaggerExpress) {
	if (err) {
		throw err;
	}
	app.use(_cors.cors);
	swaggerExpress.register(app);
	app.use(_errors.notFoundHandler);
	app.use(_errors.errorHandler);

	var port = process.env.PORT || 10010;
	app.listen(port);
});

module.exports = app; /* for testing */