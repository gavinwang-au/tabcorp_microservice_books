import {Sequelize, sequelize} from './db.mysql';

export const MysqlBookTable = sequelize.define('book', 
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: Sequelize.STRING,
		category: {
			type: Sequelize.ENUM,
			values: ['drama', 'comedy', 'sport']
		},
		description: Sequelize.TEXT
	},
	{
		timestamps: false
	}
);