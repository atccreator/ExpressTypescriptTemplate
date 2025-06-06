import { Request, Response } from "express";

export const pingHandler = (req :Request, res:Response) : void =>{
    
    console.log('request body:', req.body);// for request body
    console.log('request query:', req.query);//for query parameters
    console.log('request params:', req.params);// for url parameters

    res.send('PONG');

}

