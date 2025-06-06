import pingRouter from './ping.router';
import express from 'express';
const v1Router = express.Router();

v1Router.use('/ping', pingRouter);

export default v1Router;