import { NextFunction, Request, Response } from "express";
import fs from 'fs/promises';
import { NotFoundError } from "../utils/errors/app.error";

export const pingHandler =  async (req :Request, res:Response, next:NextFunction) : Promise<void> =>{
    
    try {
        await fs.readFile('nonexistentfile.txt');
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

