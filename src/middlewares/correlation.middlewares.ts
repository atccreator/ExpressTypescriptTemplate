import { NextFunction, Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';
import { asyncLocalStorage } from '../utils/helpers/request.helper';

export const attachCorrelationId = (req:Request, res:Response, next:NextFunction) => {
    // Generate a unique correlation ID for the request
    const correlationId = uuidv4();
    
    // Set the correlation ID in the response headers
    req.headers['X-Correlation-Id'] = correlationId;

    asyncLocalStorage.run( {correlationId:correlationId}, ()=>{

        // Call the next middleware in the stack
        next();
    })

}