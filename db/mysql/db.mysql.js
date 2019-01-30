import { HttpError, ConfigError, DatabaseError } from '../../shared/Errors'

/**
* Env 
**/
const env = require('dotenv').config({ path: './.env'});
if (env.error) {
	throw new ConfigError(env.error.message, 'env');
}


/**
* ORM 
**/
const Sequelize = require('sequelize');
const sequelize = new Sequelize({ 
    dialect  : process.env.DB_DIALECT,
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    database : process.env.DB_NAME,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD
 });

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
		throw new DatabaseError(err.message);
	});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}