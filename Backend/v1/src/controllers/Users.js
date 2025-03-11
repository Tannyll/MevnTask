const uuid = require("uuid");
const {listFunc, insertFunc, loginUserFunc, resetPasswordFunc} = require("../services/Users");
const {passwdToHash, generateAccessToken, generateRefreshToken} = require("../utils/helper");
const logger = require("../scripts/logger/Appointments");
const ApiError = require("../errors/ApiError");

const create = (req, res, next) => {
    req.body.password = passwdToHash(req.body.password);

    insertFunc(req.body)
        .then((result) => {
            res.status(201).send(result);
        }).catch((err) => {
        next(new ApiError.internalError({message: err?.message}))
    });
}

const resetPassword = (req, res, next) => {
    const newPassword = uuid.v4()?.split("-")[0];
    resetPasswordFunc({email: req.body.email}, {password: passwdToHash(newPassword)})
        .then((result) => {
            if (!result) return res.status(404).send("Not found");

            //TODO: Email gönderimi için nodemailler kullanılabilir.
            //Mail gönderme sürecini farklı bir servis herhangi bir queue servisi kullanılacak.
            // 
            res.status(200).send(result)
        }).catch((err) => {
        next(new ApiError.internalError({message: err?.message}))
    });
}
const login = (req, res, next) => {
    req.body.password = passwdToHash(req.body.password);
    console.log("login")
    loginUserFunc(req.body).then((usr) => {
        //if (!usr) return res.status(400).send({message: "User not found"})
        usr = {
            ...usr.toObject(),
            token: {
                accessToken: generateAccessToken(usr),
                refreshToken: generateRefreshToken(usr),
            }
        }
        delete usr.password;
        delete usr.createdAt;
        delete usr.updatedAt;
        //logger.info({level: 'info', message: result});
        res.status(200).send(usr)
    }).catch((err) => {
        console.log(err)
        next(new ApiError.internalError({message: err?.message}))
    });
}

const index = (req, res, next) => {
    listFunc()
        .then(result => {
            res.status(200).send(result)
        })
        .catch((err) => {
            next(new ApiError.internalError({message: err?.message}))
        });
}

module.exports = {
    create,
    resetPassword,
    login,
    index
}