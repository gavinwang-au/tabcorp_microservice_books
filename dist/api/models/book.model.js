'use strict';
'use strict;';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BookFactory = exports.BookModel = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _model = require('./model');

var _Errors = require('../shared/Errors');

var _orm = require('../services/orm.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*
* Book Model
*
**/
var ID = 1;

/**
*
* ORM
*
**/

var BookModel = exports.BookModel = function (_Model) {
	(0, _inherits3.default)(BookModel, _Model);
	(0, _createClass3.default)(BookModel, [{
		key: 'validate',


		/**
  * Validation 
  **/
		value: function validate(bookJson) {
			this.validateJson(this.requiredAttrs, bookJson);
			this.validateString('title', bookJson.title);
			this.validateString('category', bookJson.category);
			this.validateEnum('category', bookJson.category, this.listOfCats);
			this.validateString('description', bookJson.description);
		}

		/**
  * ORM 
  **/

	}, {
		key: 'toJson',
		value: function toJson() {
			return {
				id: this.id,
				title: this.title,
				category: this.category,
				description: this.description
			};
		}
	}, {
		key: 'create',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var dbRes;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return _orm.BookTable.create(this);

							case 3:
								dbRes = _context.sent;

								this.validateInteger('id', dbRes.id);
								this.id = dbRes.id;
								return _context.abrupt('return', dbRes);

							case 9:
								_context.prev = 9;
								_context.t0 = _context['catch'](0);

								console.error('BookModel.create', _context.t0);
								return _context.abrupt('return', Promise.reject(_context.t0));

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 9]]);
			}));

			function create() {
				return _ref.apply(this, arguments);
			}

			return create;
		}()
	}, {
		key: 'update',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var dbRes;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.prev = 0;
								_context2.next = 3;
								return _orm.BookTable.update(this);

							case 3:
								dbRes = _context2.sent;

								this.id = dbRes.id;
								return _context2.abrupt('return', dbRes);

							case 8:
								_context2.prev = 8;
								_context2.t0 = _context2['catch'](0);

								console.error('BookModel.update', _context2.t0);
								return _context2.abrupt('return', Promise.reject(_context2.t0));

							case 12:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[0, 8]]);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}]);

	function BookModel(bookJson) {
		(0, _classCallCheck3.default)(this, BookModel);

		/*@todo move categories to the database*/
		var _this = (0, _possibleConstructorReturn3.default)(this, (BookModel.__proto__ || Object.getPrototypeOf(BookModel)).call(this));

		_this.listOfCats = ['drama', 'comedy', 'sport'];
		_this.requiredAttrs = ['title', 'category', 'description'];
		_this.validate(bookJson);

		_this.id = bookJson.id;
		_this.title = bookJson.title;
		_this.category = bookJson.category;
		_this.description = bookJson.description;
		return _this;
	}

	return BookModel;
}(_model.Model);

/**
*
* Book Factory
*
**/


var BookFactory = exports.BookFactory = function () {
	function BookFactory() {
		(0, _classCallCheck3.default)(this, BookFactory);
	}

	(0, _createClass3.default)(BookFactory, [{
		key: 'findAll',


		/*
   * Save the book to the ORM 
   */
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var dbRes;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return _orm.BookTable.findAll();

							case 3:
								dbRes = _context3.sent;
								return _context3.abrupt('return', Promise.resolve(dbRes));

							case 7:
								_context3.prev = 7;
								_context3.t0 = _context3['catch'](0);
								return _context3.abrupt('return', Promise.reject(_context3.t0));

							case 10:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this, [[0, 7]]);
			}));

			function findAll() {
				return _ref3.apply(this, arguments);
			}

			return findAll;
		}()

		/*
   * Save the book to the ORM 
   */

	}, {
		key: 'create',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(bookJson) {
				var book, dbRes;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								book = new BookModel(bookJson);
								_context4.next = 4;
								return book.create();

							case 4:
								dbRes = _context4.sent;
								return _context4.abrupt('return', Promise.resolve(book.toJson()));

							case 8:
								_context4.prev = 8;
								_context4.t0 = _context4['catch'](0);
								return _context4.abrupt('return', Promise.reject(_context4.t0));

							case 11:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 8]]);
			}));

			function create(_x) {
				return _ref4.apply(this, arguments);
			}

			return create;
		}()

		/*
   * Retrieve a book with a given id or return all the books if the id is undefined.
   */

	}, {
		key: 'findById',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
				var dbRes;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return _orm.BookTable.findById(id);

							case 3:
								dbRes = _context5.sent;
								return _context5.abrupt('return', Promise.resolve(dbRes));

							case 7:
								_context5.prev = 7;
								_context5.t0 = _context5['catch'](0);
								return _context5.abrupt('return', Promise.reject(_context5.t0));

							case 10:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 7]]);
			}));

			function findById(_x2) {
				return _ref5.apply(this, arguments);
			}

			return findById;
		}()

		/*
   * Update a book with the given id
   */

	}, {
		key: 'update',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(id, book) {
				var _book, dbRes;

				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.prev = 0;
								_book = new BookModel(bookJson);
								_context6.next = 4;
								return _book.update();

							case 4:
								dbRes = _context6.sent;
								return _context6.abrupt('return', Promise.resolve(_book.toJson()));

							case 8:
								_context6.prev = 8;
								_context6.t0 = _context6['catch'](0);
								return _context6.abrupt('return', Promise.reject(_context6.t0));

							case 11:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this, [[0, 8]]);
			}));

			function update(_x3, _x4) {
				return _ref6.apply(this, arguments);
			}

			return update;
		}()

		/*
   * Delete a book with the given id.
   */

	}, {
		key: 'remove',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(id) {
				var dbRes;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.prev = 0;
								_context7.next = 3;
								return _orm.BookTable.destroy(id);

							case 3:
								dbRes = _context7.sent;
								return _context7.abrupt('return', Promise.resolve(dbRes));

							case 7:
								_context7.prev = 7;
								_context7.t0 = _context7['catch'](0);
								return _context7.abrupt('return', Promise.reject(_context7.t0));

							case 10:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this, [[0, 7]]);
			}));

			function remove(_x5) {
				return _ref7.apply(this, arguments);
			}

			return remove;
		}()
	}]);
	return BookFactory;
}();