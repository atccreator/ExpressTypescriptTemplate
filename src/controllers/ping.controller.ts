import { NextFunction, Request, Response } from "express";
import fs from 'fs/promises';

export const pingHandler =  async (req :Request, res:Response, next:NextFunction) : Promise<void> =>{
    
    // console.log('request body:', req.body);// for request body
    // console.log('request query:', req.query);//for query parameters
    // console.log('request params:', req.params);// for url parameters

    // res.status(200).json({
    //     message: 'pong',
    //     success: true
    // });

    try {
        await fs.readFile('nonexistentfile.txt');
        res.status(200).json({
            message: 'pong',
            success: true
        });
    }catch (error) {
        next(error); // Pass the error to the custom error handler middleware
    }

} 

