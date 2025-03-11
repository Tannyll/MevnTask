const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: String,
    profilePicture: String,
}, {versionKey: false, timestamps: true});

module.exports = Mongoose.model("Users", UserSchema)