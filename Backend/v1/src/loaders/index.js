const {ConnectDb} = require('./Database')
const {AppointmentSeed} = require('./FakerSeedData')

module.exports = ()=> {
    ConnectDb();
    //AppointmentSeed();
}