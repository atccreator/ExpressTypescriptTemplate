import { NextFunction, Request, Response } from "express";
// import fs from 'fs/promises';
import { NotFoundError } from "../utils/errors/app.error";
import logger from "../config/logger.config";

export const pingHandler =  async (req :Request, res:Response, next:NextFunction) : Promise<void> =>{
    
    try {
        // await fs.readFile('nonexistentfile.txt');
        logger.info('Ping request received');
        res.status(200).json({
            message: 'pong',
            success: true
        });
    }catch (error) {
        // Throwing a custom error
        // This will be caught by the error middleware
        throw new NotFoundError('something went wrong !!!');
    }

} 

