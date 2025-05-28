import { Request, Response } from "express";

export const pingHandler = (req :Request, res:Response) : void =>{
    res.send('PONG');
}

