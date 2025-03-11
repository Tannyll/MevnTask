const joi = require("joi")
const Joi = require("joi");
const req = require("express/lib/request");

const createValidation = joi.object({
    fullName: Joi.string().required().min(3),
    email: Joi.string().required().min(3),
    password: Joi.string().required().min(3),
    
})

const loginValidation = joi.object({
    email: Joi.string().required().min(3),
    password: Joi.string().required().min(3),
    
})

const resetPasswordValidation = joi.object({
    email: Joi.string().required().min(3),
})


module.exports = {
    createValidation,
    resetPasswordValidation,
    loginValidation
}