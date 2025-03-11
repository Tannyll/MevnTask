const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', 
    format: winston.format.json(),
         
    defaultMeta: {service: 'appointments-service'},
    transports: [
        new winston.transports.File({filename: 'v1/src/logs/appointments/error.log', level: 'error'}),
        new winston.transports.File({filename: 'v1/src/logs/appointments/info.log', level: 'info'}),
        new winston.transports.File({filename: 'v1/src/logs/appointments/logs.log'}),
        new winston.transports.Console({})
    ]
})


module.exports = logger 