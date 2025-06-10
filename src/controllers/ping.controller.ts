import { NextFunction, Request, Response } from "express";
import fs from 'fs';

export const pingHandler =  (req :Request, res:Response, next:NextFunction) =>{
    
    // console.log('request body:', req.body);// for request body
    // console.log('request query:', req.query);//for query parameters
    // console.log('request params:', req.params);// for url parameters

    // res.status(200).json({
    //     message: 'pong',
    //     success: true
    // });

    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            next(err);
        }
    });
} 

