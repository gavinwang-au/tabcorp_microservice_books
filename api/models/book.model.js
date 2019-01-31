'use strict;'
import { Model } from './model'
import { 
	HttpError,
	ConfigError,
	DatabaseError,
	ModelError,
	ModelValidationError,
	ModelNotFoundError 
} from '../shared/Errors';


/**
*
* ORM
*
**/
import { BookTable } from '../services/orm.service';


/**
*
* Book Model
*
**/
var ID = 1;

export class BookModel extends Model{
	
	/**
	* Validation 
	**/
	validate(bookJson){
		this.validateJson(this.requiredAttrs, bookJson);
		this.validateString('title', bookJson.title);
		this.validateString('category', bookJson.category);
		this.validateEnum('category', bookJson.category, this.listOfCats);
		this.validateString('description', bookJson.description);
	}

	/**
	* ORM 
	**/
	toJson(){
		return {
			id: this.id, 
			title: this.title,
			category: this.category,
			description: this.description
		}
	}
	async create(){
		try{
			let dbRes = await BookTable.create(this);
			this.validateInteger('id', dbRes.id);
			this.id = dbRes.id;
			return dbRes;
		}
		catch(err){
			console.error('BookModel.create', err);
			return Promise.reject(err);	
		}
		
	}
	async update(){
		try{
			let dbRes = await BookTable.update(this);
			this.id = dbRes.id;
			return dbRes;
		}
		catch(err){
			console.error('BookModel.update', err);
			return Promise.reject(err);	
		}
		
	}

	constructor(bookJson){
		super();
		/*@todo move categories to the database*/
		this.listOfCats = ['drama','comedy','sport'];
		this.requiredAttrs = ['title', 'category', 'description']
		this.validate(bookJson);

		this.id = bookJson.id; 
		this.title = bookJson.title;
		this.category = bookJson.category;
		this.description = bookJson.description;
	}
}

/**
*
* Book Factory
*
**/
export class BookFactory {

	/*
	 * Save the book to the ORM 
	 */
	async findAll() {
		try{
			let dbRes = await BookTable.findAll();

			return Promise.resolve(dbRes);
		} 
		catch(err){
			return Promise.reject(err);
		}	
	}

	/*
	 * Save the book to the ORM 
	 */
	async create(bookJson) {
		try{
			let book = new BookModel(bookJson);
			let dbRes = await book.create();

			return Promise.resolve(book.toJson());
		} 
		catch(err){
			return Promise.reject(err);
		}	
	}

	/*
	 * Retrieve a book with a given id or return all the books if the id is undefined.
	 */
	async findById(id) {
		try{
			let dbRes = await BookTable.findById(id);

			return Promise.resolve(dbRes);
		} 
		catch(err){
			return Promise.reject(err);
		}
	}

	

	/*
	 * Update a book with the given id
	 */
	async update(id, book) {
		try{
			let book = new BookModel(bookJson);
			let dbRes = await book.update();

			return Promise.resolve(book.toJson());
		} 
		catch(err){
			return Promise.reject(err);
		}
	}	

	/*
	 * Delete a book with the given id.
	 */
	async remove(id) {
		try{
			let dbRes = await BookTable.destroy(id);

			return Promise.resolve(dbRes);
		} 
		catch(err){
			return Promise.reject(err);
		}			
	}	
}