import winston from 'winston';
import { getCorrelationId } from '../utils/helpers/request.helper';
import DailyRotateFile from 'winston-daily-rotate-file';

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
                getCorrelationId: getCorrelationId(), // get the correlation ID from the request context
                data,
            };
            return JSON.stringify(output); // format the output as a pretty JSON string

        }),
    ),
    transports: [ 
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'logs/%DATE%-app.log', // log file name with date
            datePattern: 'YYYY-MM-DD', // date pattern for the log files
            maxSize: '20m', // maximum size of a log file before rotation
            maxFiles: '14d', // keep logs for 14 days
        })
    ], // transports are the destinations for the logs
    
}); // create a new logger object

export default logger;