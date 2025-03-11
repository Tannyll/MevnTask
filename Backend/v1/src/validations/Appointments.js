const joi = require("joi")

const createValidation = joi.object({
    name: joi.string().required().min(3),
    date: joi.string().required().min(10).max(10),
    time: joi.string().required().min(5).max(5),
})

const searchValidation = joi.object({
    date: joi.string().required().min(10).max(10),
    time: joi.string().required().min(5).max(5),
})

const updateValidation = joi.object({
    name: joi.string().required().min(3),
    date: joi.string().required().min(10).max(10),
    time: joi.string().required().min(5).max(5),

    // date: joi.date().required().custom((value, helper) => {
    //     const day = value.getDay();
    //     const hours = value.getHours();
    //     const minutes = value.getMinutes();
    //
    //     // Haftanın 5 günü (Pazartesi - Cuma)
    //     if (day < 1 || day > 5) {
    //         return helper.message('Tarih haftanın 5 günü (Pazartesi - Cuma) arasında olmalıdır.');
    //     }
    //
    //     // Saat 13:30 ile 17:00 arasında
    //     if ((hours === 13 && minutes >= 30) || (hours > 13 && hours < 17) || (hours === 17 && minutes === 0)) {
    //         return value;
    //     }
    //
    //     return helper.message('Date alanında Saat 13:30 ile 17:00 arasında olmalıdır.');
    // }),
    //
    // time: joi.date().required().custom((value, helper) => {
    //     const day = value.getDay();
    //     const hours = value.getHours();
    //     const minutes = value.getMinutes();
    //
    //     // Haftanın 5 günü (Pazartesi - Cuma)
    //     if (day < 1 || day > 5) {
    //         return helper.message('Tarih haftanın 5 günü (Pazartesi - Cuma) arasında olmalıdır.');
    //     }
    //
    //     // Saat 13:30 ile 17:00 arasında
    //     if ((hours === 13 && minutes >= 30) || (hours > 13 && hours < 17) || (hours === 17 && minutes === 0)) {
    //         return value;
    //     }
    //
    //     return helper.message('Time alanında Saat 13:30 ile 17:00 arasında olmalıdır.');
    // }),
    
    
    // date: joi.string().pattern(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/).required()
    //     .custom((value, helper) => {
    //         const [hours, minutes] = value.split(':').map(Number);
    //         // Saat 13:30 ile 17:00 arasındaki zaman aralığını kontrol et
    //         if ((hours === 13 && minutes >= 30) || (hours > 13 && hours < 17) || (hours === 17 && minutes === 0)) {
    //             return value;
    //         }
    //         return helper.message('Saat 13:30 ile 17:00 arasında olmalıdır.');
    //     }),
    // time: joi.string().pattern(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/).required()
    //     .custom((value, helper) => {
    //         const [hours, minutes] = value.split(':').map(Number);
    //         // Saat 13:30 ile 17:00 arasındaki zaman aralığını kontrol et
    //         if ((hours === 13 && minutes >= 30) || (hours > 13 && hours < 17) || (hours === 17 && minutes === 0)) {
    //             return value;
    //         }
    //         return helper.message('Saat 13:30 ile 17:00 arasında olmalıdır.');
    //     })
})


module.exports = {
    createValidation,
    updateValidation,
    searchValidation
}