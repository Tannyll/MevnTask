const {listFunc, insertFunc, updateFunc} = require("../services/Appointments");
const logger = require("../scripts/logger/Appointments");
const ApiError = require("../errors/ApiError");

const create = (req, res, next) => {
    req.body.user_id = req.user;
    insertFunc(req.body).then((result) => {
        logger.info({level: 'info', message: result});
        console.log(result)
        if (!result) return next(ApiError.notFound());
        res.status(201).send(result);
    }).catch((err) => {
        next(ApiError.internalError(err))
    });
}

const update = (req, res, next) => {

    if (!req.params?.id) res.status(400).send({message: "id is required"});

    updateFunc(req.body, req.params.id).then((result) => {
        logger.info({level: 'info', message: result});
        if (!result) return next(ApiError.notFound("Record not found"));
        res.status(201).send(result);
    }).catch((err) => {
        next(ApiError.internalError(err))
    });
}

const index = (req, res, next) => {
    console.log(req.user)
    listFunc()
        .then(result => {
            res.status(200).send(result)
        })
        .catch((err) => {
            next(ApiError.internalError(err))
        });
}

const myAppointment = (req, res, next) => {


    listFunc({user_id: req.user?._id})
        .then(result => {
            if (!result) return next(ApiError.notFound("Record not found"));

            res.status(200).send(result)
        })
        .catch((err) => {
            next(ApiError.internalError(err))
        });
}

const search = (req, res, next) => {
    listFunc({date: req.date, time: req.time})
        .then(result => {
            res.status(200).send(result)
        })
        .catch((err) => {
            next(ApiError.internalError(err))
        });
}

const slots = (req, res, next) => {
    console.log("slots")

    listFunc()
        .then(rows => {
            let temp = [];

            for (let i = 30; i <= 31; i++) {
                for (let h = 13; h <= 17; h++) {
                    for (let m = 0; m < 60; m += 30) {
                        let d = `2024-03-${i}`;
                        let t = `${h}:${m === 0 ? '00' : m}`;
                        temp.push({date: d, time: t});
                    }
                }
            }
            for (let i = 1; i <= 3; i++) {
                for (let h = 13; h <= 17; h++) {
                    for (let m = 0; m < 60; m += 30) {
                        let d = `2024-04-0${i}`;
                        let t = `${h}:${m === 0 ? '00' : m}`;
                        temp.push({date: d, time: t});
                    }
                }
            }

            let available = temp.filter((slot) => {
                return !rows.some((r) => r.date === slot.date && r.time === slot.time);
            });

            console.log('available slots:', available);

            res.status(200).send(available)
        })
        .catch((err) => {
            next(ApiError.internalError(err))
        });
}

module.exports = {
    myAppointment,
    slots,
    create,
    update,
    search,
    index
}