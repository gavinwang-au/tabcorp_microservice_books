'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BookTable = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Errors = require('../shared/Errors');

var _db = require('../db/mysql/db.book');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*
* ORM 
* facade for different DBs
* Optional transform and CRUD actions 
**/
var BookTable = exports.BookTable = {
	findById: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
			var dbRes;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return _db.MysqlBookTable.findById(id);

						case 3:
							dbRes = _context.sent;
							return _context.abrupt('return', Promise.resolve(dbRes));

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.error('BookTable.findById.error', _context.t0.message);
							return _context.abrupt('return', Promise.resolve(new _Errors.DatabaseError(_context.t0.message)));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 7]]);
		}));

		function findById(_x) {
			return _ref.apply(this, arguments);
		}

		return findById;
	}(),
	findAll: function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var dbRes;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return _db.MysqlBookTable.findAll();

						case 3:
							dbRes = _context2.sent;
							return _context2.abrupt('return', Promise.resolve(dbRes));

						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2['catch'](0);

							console.error('BookTable.findAll.error', _context2.t0.message);
							return _context2.abrupt('return', Promise.resolve(new _Errors.DatabaseError(_context2.t0.message)));

						case 11:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 7]]);
		}));

		function findAll() {
			return _ref2.apply(this, arguments);
		}

		return findAll;
	}(),
	create: function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(bookModel) {
			var dbRes;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return _db.MysqlBookTable.create({
								title: bookModel.title,
								category: bookModel.category,
								description: bookModel.description
							});

						case 3:
							dbRes = _context3.sent;
							return _context3.abrupt('return', Promise.resolve(dbRes));

						case 7:
							_context3.prev = 7;
							_context3.t0 = _context3['catch'](0);

							console.error('BookTable.create.error', _context3.t0.message);
							return _context3.abrupt('return', Promise.resolve(new _Errors.DatabaseError(_context3.t0.message)));

						case 11:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 7]]);
		}));

		function create(_x2) {
			return _ref3.apply(this, arguments);
		}

		return create;
	}(),
	update: function () {
		var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(bookModel) {
			var dbRes;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_context4.next = 3;
							return _db.MysqlBookTable.update({
								title: bookModel.title,
								category: bookModel.category,
								description: bookModel.description
							}, {
								where: { id: bookModel.id }
							});

						case 3:
							dbRes = _context4.sent;
							return _context4.abrupt('return', Promise.resolve(dbRes));

						case 7:
							_context4.prev = 7;
							_context4.t0 = _context4['catch'](0);

							console.error('BookTable.update.error', _context4.t0.message);
							return _context4.abrupt('return', Promise.resolve(new _Errors.DatabaseError(_context4.t0.message)));

						case 11:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[0, 7]]);
		}));

		function update(_x3) {
			return _ref4.apply(this, arguments);
		}

		return update;
	}(),
	destroy: function () {
		var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(bookModel) {
			var dbRes;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return _db.MysqlBookTable.update({
								where: { id: bookModel.id }
							});

						case 3:
							dbRes = _context5.sent;
							return _context5.abrupt('return', Promise.resolve(dbRes));

						case 7:
							_context5.prev = 7;
							_context5.t0 = _context5['catch'](0);

							console.error('BookTable.destroy.error', _context5.t0.message);
							return _context5.abrupt('return', Promise.resolve(new _Errors.DatabaseError(_context5.t0.message)));

						case 11:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this, [[0, 7]]);
		}));

		function destroy(_x4) {
			return _ref5.apply(this, arguments);
		}

		return destroy;
	}()

};