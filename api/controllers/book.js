 'use strict';

 /**
 * Error Codes 
 **/
const db = require('../../mock/db')();

/**
* Error Codes 
**/
// module.exports = {HttpError, getAll, save, getOne, update, delBook};
import { HttpError, ConfigError, DatabaseError } from '../../shared/Errors'

function microservice(req, res, next){
	console.log('\n\n\n ---> getAll', 
		{'x-microservices': req.swagger.operation['x-microservices']}
	)
}


/**
*
* Get All Books 
* GET /book 
*
*/
export function getAll(req, res, next) {
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

/**
*
* Create Book 
* POST /book 
*
*/
export function save(req, res, next) {
	res.json({success: db.save(req.body), description: "Movie added to the list!"});
}



/**
*
* Show Book 
* POST /book/{id} 
*
*/
export function find(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	var book = db.find(id);
	if(book) {
		res.json(book);
	}
	else {
		res.status(204).send();
	}		
}

/**
*
* Update Book 
* PUT /book/{id} 
*
*/
export function update(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	var book = req.body;
	if(db.update(id, book)){
		res.json({success: 1, description: "Movie updated!"});
	}
	else{
		res.status(204).send();
	}
	
}

/**
*
* Delete Book 
* DELETE /book/{id} 
*
*/
export function delBook(req, res, next) {
	var id = req.swagger.params.id.value; 
	if(db.remove(id)){
		res.json({success: 1, description: "Movie deleted!"});
	}
	else{
		res.status(204).send();
	}
	
}