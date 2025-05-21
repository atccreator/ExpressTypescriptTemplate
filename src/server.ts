import express from "express";
import loadEnv from "./config";


const app = express();

app.get("/ping", (req, res) => {
  res.send("PONG");
});

loadEnv();
console.log("Environment variables loaded successfully");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
  console.log(process.env.SERVER_NAME);
});