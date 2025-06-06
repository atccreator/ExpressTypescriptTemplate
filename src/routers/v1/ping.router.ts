import { pingHandler } from "../../controllers/ping.controller";
import express from 'express';


const pingRouter = express.Router();

// // custom middleware to validate request body   
// function bodyValidator(req:Request, res:Response, next:NextFunction):void{
//     if (typeof req.body.name !== 'string'){
//         res.status(400)
//         res.send('Invalid request body, name must be a string');
//     }
//     next();
// }

pingRouter.get('/', pingHandler);
pingRouter.get('/:user_id/comments',pingHandler);

pingRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'pong' });
});
export default pingRouter;