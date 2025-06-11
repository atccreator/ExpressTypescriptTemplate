import { Request, Response, NextFunction } from 'express';
export const genericErrorHandler = (err: any, req:Request, res: Response, next:NextFunction) => {
    res.status(501).json({
        success: false,
        message: 'An unexpected error occurred',
    });
}