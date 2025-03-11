const ApiError = require('../../errors/ApiError');

const objectIdValidater = (req, res, next) => {
    if (!req?.params?.id?.match(/^[0-9a-fA-F]{24}$/)) {
        next(new ApiError("Geçersiz ObjectId", 400))
        return;
    }
    next()
}

module.exports = objectIdValidater;