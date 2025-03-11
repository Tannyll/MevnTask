const Mongoose = require('mongoose');
const logger = require("../scripts/logger/Appointments");

const Database = Mongoose.connection;

Database.once('open', () => {
    console.log('Database connection established\n');
})

const ConnectDb = async () => {
    await Mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`)
    if (process.env.NODE_ENV === 'development') {
       // logger.info('Database dropeed.');
       //await Mongoose.connection.db.dropDatabase()
    }
}

module.exports = {
    ConnectDb
}