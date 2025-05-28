import express from "express";
import {serverConfig} from "./config";
import { pingRouter } from "./routers/ping.router";


const app = express();


// register all the routers and their cooresponding routes without app server object.
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});