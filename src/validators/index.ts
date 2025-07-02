import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logger from "../config/logger.config";

export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            logger.info('Validating request body');
            await schema.parseAsync(req.body);
            logger.info('Request body is valid');
            next();
        }catch (error) {
            logger.error('Invalid request body');
            res.status(400).json({
            message: 'Invalid request body',
            success: false,
            error: error
            });  
            return
        };
    };
};

export const validateRequestParams = (schema: AnyZodObject) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await schema.parseAsync(req.query);
            logger.info('Query params are valid:');
            next();
        }catch (error) {
            logger.error('Invalid query params');
            res.status(400).json({
            message: 'Invalid query params',
            success: false,
            error: error
            });  
            return;
        };
    };
};