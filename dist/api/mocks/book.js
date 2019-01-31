'use strict';

module.exports = {
	search: function search(req, res, next) {
		res.json({
			books: [{
				title: "A Game of Thrones",
				category: 'drama',
				description: 'A song of ice and fire book 1'
			}, {
				title: "A Storm of Swords",
				category: 'drama',
				description: 'A song of ice and fire book 2'
			}]
		});
	}
};