

const validateMiddleware = (schema) => (req, res, next) => {


    const {value, error} = schema.validate(req.body);


    if (error) {
        const errorMsg = error.details?.map(detail => detail.message).join(', ');
        res.status(400).send(errorMsg).json({error: errorMsg});

        return;
    }
    
    Object.assign(req, value);
    
    return next();
}


module.exports = validateMiddleware;