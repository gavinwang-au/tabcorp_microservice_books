'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MysqlBookTable = undefined;

var _db = require('./db.mysql');

var MysqlBookTable = exports.MysqlBookTable = _db.sequelize.define('book', {
	id: {
		type: _db.Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	title: _db.Sequelize.STRING,
	category: {
		type: _db.Sequelize.ENUM,
		values: ['drama', 'comedy', 'sport']
	},
	description: _db.Sequelize.TEXT
}, {
	timestamps: false
});