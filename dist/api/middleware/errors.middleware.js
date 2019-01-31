'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notFoundHandler = notFoundHandler;
exports.errorHandler = errorHandler;

var _Errors = require('../shared/Errors');

/*
* 404
*/
function notFoundHandler(req, res) {
    res.status(404).json({ err: 'not found', url: req.url, method: req.method });
}
/*
* Custom Errors 
*/
function errorHandler(err, req, res, next) {

    try {
        var operationId = req.swagger.operation.operationId;
        err.operationId = operationId;
    } catch (err) {
        if (err instanceof TypeError) {
            console.error('Swagger operation is missing: ', err.message);
        }
    }

    console.error('middleware.errorHandler.err ---> ', { 'middleware.errorHandler.err.constructor.name': err.constructor.name, 'middleware.errorHandler.err': err.message, 'err instanceof HttpError': err instanceof _Errors.HttpError });
    if (err instanceof Error) {
        console.error(err);
        res.status(500).json({ message: err.message });
    } else if (err instanceof _Errors.HttpError) {
        res.status(err.code).json(err);
    } else {
        res.status(err.code).json(err);
    }
}