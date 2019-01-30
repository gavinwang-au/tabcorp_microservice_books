import { HttpError } from '../shared/Errors';

/*
* 404
*/
export function notFoundHandler(req, res) {
    res.status(404).json({err: 'not found', url: req.url, method: req.method});
}
/*
* Custom Errors 
*/
export function errorHandler(err, req, res, next) {
    let operationId = req.swagger.operation.operationId;
    err.operationId = operationId; /* method id */ 
    console.error('middleware.errorHandler.err ---> ', {'middleware.errorHandler.err.constructor.name':err.constructor.name, 'middleware.errorHandler.err':err.message, 'err instanceof HttpError': err instanceof HttpError});
    if(err instanceof Error){
        console.error(err);
        res.status(500).json({message:err.message});
    }
    else if(err instanceof HttpError){
    	res.status(err.code).json(err);
    }
    else{
        res.status(err.code).json(err);   
    }
}	
