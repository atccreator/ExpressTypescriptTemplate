// This file contain the all the basic configuration logic for app server to work
import dotenv from "dotenv";

type ServerConfig = {
    PORT: number;
}


function loadEnv(){
    dotenv.config();
    // dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
    console.log("Environment variables loaded successfully");
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3000, // Default to 3000 if PORT is not set
}