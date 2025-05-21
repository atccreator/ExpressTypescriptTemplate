// This file contain the all the basic configuration logic for app server to work
import dotenv from "dotenv";

function loadEnv(){
    dotenv.config();
// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
}

export default loadEnv;