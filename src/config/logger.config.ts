import winston from 'winston';

const logger = winston.createLogger({
    // configration for the logger
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // timestamp format
        winston.format.json(), // log are formatted as JSON
        //define the custom print format
        winston.format.printf(({ timestamp, level, message, ...data })=>{
            const output = {
                timestamp,
                level,
                message,
                data,
            };
            return JSON.stringify(output); // format the output as a pretty JSON string

        }),
    ),
    transports: [ new winston.transports.Console()], // transports are the destinations for the logs
    
}); // create a new logger object

export default logger;