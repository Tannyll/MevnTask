class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.status = statusCode;
    }


    static notFound() {
        this.status = 404;
        this.message = 'Rocord is not found';
    }
    
    static badRequest() {
     this.status = 404;
        this.message = 'Record is bad request';
    }
}

module.exports = ApiError;