'use strict';

var _Errors = require('../../shared/Errors');

/**
* ORM 
**/
var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database:', err);
  throw new _Errors.DatabaseError(err.message);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};