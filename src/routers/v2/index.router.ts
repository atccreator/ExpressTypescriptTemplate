import express from 'express';

const v2Router = express.Router();

v2Router.use('/ping', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'pong from v2' });
});

export default v2Router;