const ApiError = require("../errors/ApiError");

const objectIdValidater = (req, res, next) => {
    if (!req?.params?.id?.match(/^[0-9a-fA-F]{24}$/)) {
        next(ApiError.badRequest("Geçersiz ObjectId"));
        return;
    }
    next()
}

module.exports = objectIdValidater;