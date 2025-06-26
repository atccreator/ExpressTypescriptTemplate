import { NextFunction, Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';

export const attachCorrelationId = (req:Request, res:Response, next:NextFunction) => {
    // Generate a unique correlation ID for the request
    const correlationId = uuidv4();
    
    // Set the correlation ID in the response headers
    req.headers['X-Correlation-Id'] = correlationId;

    next();
}