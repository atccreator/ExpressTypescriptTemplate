import { pingHandler } from "../../controllers/ping.controller";

import express from 'express';

const pingRouter = express.Router();

pingRouter.get('/',pingHandler);

pingRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'pong' });
});
export default pingRouter;