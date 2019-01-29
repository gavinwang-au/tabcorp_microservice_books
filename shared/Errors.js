'use strict';

/*
const util = require('util');
export function HttpError(httpCode, message, type, key) {
	this.code = httpCode;
	this.type = type ? type : 'validation';
	this.key = key ? key : '';
	this.message = message;

	Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';
*/


class HttpError extends Error{
	constructor(httpCode, message, type, key) {
		super(message);
		this.code = httpCode;
		this.type = type ? type : 'validation';
		this.key = key ? key : 'id';
		this.message = message;

		Error.captureStackTrace(this, HttpError);
	}
}

class ConfigError extends HttpError{
	constructor(key, message) {
		super(500, message, 'config', key);
	}
}

class DatabaseError extends HttpError{
	constructor(key, message) {
		super(500, message, 'database', key);
	}
}

