import { DatabaseError } from '../../shared/Errors'
import { MysqlBookTable } from '../../db/mysql/db.book'

/**
*
* ORM 
* facade for different DBs
* Optional transform and CRUD actions 
**/
export const BookTable = {
	findById: async function(id) {
		try{
			let dbRes = await MysqlBookTable.findById(id);
			return Promise.resolve(dbRes);
		}
		catch(err){
			console.error('BookTable.findById.error', err.message);
			return Promise.resolve(new DatabaseError(err.message));
		}
	},
	findAll: async function() {
		try{
			let dbRes = await MysqlBookTable.findAll();
			return Promise.resolve(dbRes);
		}
		catch(err){
			console.error('BookTable.findAll.error', err.message);
			return Promise.resolve(new DatabaseError(err.message));
		}
	},
	create: async function(bookModel) {
		try{
			let dbRes = await MysqlBookTable.create({
				title: bookModel.title,
				category: bookModel.category,
				description: bookModel.description,
			});
			return Promise.resolve(dbRes);
		}
		catch(err){
			console.error('BookTable.create.error', err.message);
			return Promise.resolve(new DatabaseError(err.message));
		}
	},
	update: async function(bookModel) {
		try{
			let dbRes = await MysqlBookTable.update(
				{
					title: bookModel.title,
					category: bookModel.category,
					description: bookModel.description,
				},
				{
					where: {id: bookModel.id}
				});
			return Promise.resolve(dbRes);
		}
		catch(err){
			console.error('BookTable.update.error', err.message);
			return Promise.resolve(new DatabaseError(err.message));
		}
	},
	destroy: async function(bookModel) {
		try{
			let dbRes = await MysqlBookTable.update({
				where: {id: bookModel.id}
			});
			return Promise.resolve(dbRes);
		}
		catch(err){
			console.error('BookTable.destroy.error', err.message);
			return Promise.resolve(new DatabaseError(err.message));
		}
	},

}