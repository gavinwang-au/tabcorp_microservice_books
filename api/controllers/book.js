 'use strict';


var util = require('util');
function HttpError(httpCode, message, type, key) {
	this.code = httpCode;
	this.type = type ? type : 'validation';
	this.key = key ? key : 'id';
	this.message = message;

	Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CATCH snippet 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if (err instanceof HttpError) {
	console.log(err.code, err.message);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



var db = require('../../mock/db')();
// Exports all the functions to perform on the db
module.exports = {HttpError, getAll, save, getOne, update, delMovie};


function microservice(req, res, next){
	console.log('\n\n\n ---> getAll', 
		{'x-microservices': req.swagger.operation['x-microservices']}
	)
}


//GET /book operationId
function getAll(req, res, next) {
	try{ 
		microservice(req,res,next)
		
		throw new HttpError(512, 'Not implemented ');
		res.json({ books: db.find()});
	}
	catch(err){
		if (err instanceof HttpError) {
			console.log(err.code, err.message);
		}
		next(err);
	}
  
}
//POST /book operationId
function save(req, res, next) {
	res.json({success: db.save(req.body), description: "Movie added to the list!"});
}
//GET /book/{id} operationId
function getOne(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	var book = db.find(id);
	if(book) {
		res.json(book);
	}else {
		res.status(204).send();
	}		
}

//PUT /book/{id} operationId
function update(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	var book = req.body;
	if(db.update(id, book)){
		res.json({success: 1, description: "Movie updated!"});
	}else{
		res.status(204).send();
	}
	
}
//DELETE /book/{id} operationId
function delBook(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	if(db.remove(id)){
		res.json({success: 1, description: "Movie deleted!"});
	}else{
		res.status(204).send();
	}
	
}