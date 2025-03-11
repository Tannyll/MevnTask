const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Appointments");
const AppointmentsSchema = new Mongoose.Schema({
    date: String,
    time: String,
    name: String,
    user_id: {
     type: Mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        
    }
}, {versionKey: false, timestamps: true});

// AppointmentsSchema.pre("save", async function (next, doc) {
//     //console.log(docs);
//     next();
// })


AppointmentsSchema.post("save", (doc) => {
    logger.log({level: 'info', message: doc});
})


module.exports = Mongoose.model("Appointments", AppointmentsSchema)