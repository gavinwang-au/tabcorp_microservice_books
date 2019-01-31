'use strict';

/**
* Models + Factory facade
**/

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.destroy = exports.update = exports.find = exports.create = exports.getAll = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
*
* Get All Books 
* GET /book 
*
*/
var getAll = exports.getAll = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
		var books;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return bookFactory.findAll();

					case 3:
						books = _context.sent;

						res.json(books);
						_context.next = 11;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](0);

						if (_context.t0 instanceof _Errors.ModelValidationError) {
							console.error('ModelValidationFoundError', _context.t0.message);
						}
						next(_context.t0);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 7]]);
	}));

	return function getAll(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();

/**
*
* Create Book 
* POST /book 
*
*/


var create = exports.create = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
		var book;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.next = 3;
						return bookFactory.create(req.body);

					case 3:
						book = _context2.sent;

						book.description += '. Book added successfully';
						res.json(book);
						_context2.next = 11;
						break;

					case 8:
						_context2.prev = 8;
						_context2.t0 = _context2['catch'](0);

						next(_context2.t0);

					case 11:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this, [[0, 8]]);
	}));

	return function create(_x4, _x5, _x6) {
		return _ref2.apply(this, arguments);
	};
}();

/**
*
* Show Book 
* GET /book/{id} 
*
*/


var find = exports.find = function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
		var id, book;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						id = req.swagger.params.id.value;
						_context3.prev = 1;
						_context3.next = 4;
						return bookFactory.findById(id);

					case 4:
						book = _context3.sent;

						res.json(book);
						_context3.next = 11;
						break;

					case 8:
						_context3.prev = 8;
						_context3.t0 = _context3['catch'](1);

						next(_context3.t0);

					case 11:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this, [[1, 8]]);
	}));

	return function find(_x7, _x8, _x9) {
		return _ref3.apply(this, arguments);
	};
}();

/**
*
* Update Book 
* PUT /book/{id} 
*
*/


var update = exports.update = function () {
	var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
		var id, book;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						id = req.swagger.params.id.value;
						_context4.prev = 1;
						_context4.next = 4;
						return bookFactory.update(id, req.body);

					case 4:
						book = _context4.sent;

						book.description += '. Book updated successfully';
						res.json(book);
						_context4.next = 12;
						break;

					case 9:
						_context4.prev = 9;
						_context4.t0 = _context4['catch'](1);

						next(_context4.t0);

					case 12:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this, [[1, 9]]);
	}));

	return function update(_x10, _x11, _x12) {
		return _ref4.apply(this, arguments);
	};
}();

/**
*
* Delete Book 
* DELETE /book/{id} 
*
*/


var destroy = exports.destroy = function () {
	var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
		var id, book;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						id = req.swagger.params.id.value;
						_context5.prev = 1;
						_context5.next = 4;
						return bookFactory.destroy(id);

					case 4:
						book = _context5.sent;

						book.description += '. Book added successfully';
						res.status(204).json(book);
						_context5.next = 12;
						break;

					case 9:
						_context5.prev = 9;
						_context5.t0 = _context5['catch'](1);

						next(_context5.t0);

					case 12:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this, [[1, 9]]);
	}));

	return function destroy(_x13, _x14, _x15) {
		return _ref5.apply(this, arguments);
	};
}();

var _book = require('../models/book.model');

var _Errors = require('../shared/Errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookFactory = new _book.BookFactory();

/**
* Error Codes 
**/