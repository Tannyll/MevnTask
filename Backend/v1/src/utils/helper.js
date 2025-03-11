const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const passwdToHash = (password) => {
    return CryptoJS.HmacSHA1(password, "onetothreeonetothree").toString();
};


const generateAccessToken = (user) => {
    return jwt.sign({name: user.email, ...user}, "onetothreeonetothree1", {expiresIn: "1w"});
}

const generateRefreshToken = (user) => {
    return jwt.sign({name: user.email, ...user}, "onetothreeonetothree2");

}
module.exports = {passwdToHash, generateAccessToken, generateRefreshToken};