import { pingHandler } from "../controllers/ping.controller";

import express from 'express';

export const pingRouter = express.Router();

pingRouter.get('/ping',pingHandler);