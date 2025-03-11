class ApiError extends Error {
    constructor(message, statusCode = 500, errors = []) {
        super(message);
        this.status = statusCode;
        this.errors = errors;
        Error.captureStackTrace(this, this.constructor);
    }

    static notFound(message = 'Record not found', errors = []) {
        return new ApiError(message, 404, errors);
    }

    static badRequest(message = 'Bad request', errors = []) {
        return new ApiError(message, 400, errors);
    }

    static unauthorized(message = 'Unauthorized', errors = []) {
        return new ApiError(message, 401, errors);
    }

    static forbidden(message = 'Forbidden', errors = []) {
        return new ApiError(message, 403, errors);
    }

    static internalError(message = 'Internal Server Error', errors = []) {
        return new ApiError(message, 500, errors);
    }
}

module.exports = ApiError;