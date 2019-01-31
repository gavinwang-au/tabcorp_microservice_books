'use strict';

/**
* Models + Factory facade
**/
import { BookFactory, BookModel } from '../models/book.model';
const bookFactory = new BookFactory();

/**
* Error Codes 
**/
import { 
	HttpError,
	ConfigError,
	DatabaseError,
	ModelError,
	ModelNotFoundError,
	ModelValidationError
} from '../shared/Errors';


/**
*
* Get All Books 
* GET /book 
*
*/
export async function getAll(req, res, next) {
	try{ 
		let books = await bookFactory.findAll();
		res.json(books);
	}
	catch(err){
		if (err instanceof ModelValidationError) {
			console.error('ModelValidationFoundError', err.message);
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
export async function create(req, res, next) {
	try{ 
		let book = await bookFactory.create(req.body);
		book.description += '. Book added successfully';
		res.json(book);
	}
	catch(err){
		next(err);
	}
}



/**
*
* Show Book 
* GET /book/{id} 
*
*/
export async function find(req, res, next) {
	let id = req.swagger.params.id.value; 
	
	try{ 
		let book = await bookFactory.findById(id);
		res.json(book);
	}
	catch(err){
		next(err);
	}		
}

/**
*
* Update Book 
* PUT /book/{id} 
*
*/
export async function update(req, res, next) {

	let id = req.swagger.params.id.value; 

	try{ 
		let book = await bookFactory.update(id, req.body);
		book.description += '. Book updated successfully';
		res.json(book);
	}
	catch(err){
		next(err);
	}
}

/**
*
* Delete Book 
* DELETE /book/{id} 
*
*/
export async function destroy(req, res, next) {

	let id = req.swagger.params.id.value; 

	try{ 
		let book = await bookFactory.destroy(id);
		book.description += '. Book added successfully';
		res.status(204).json(book);
	}
	catch(err){
		next(err);
	}
	
}