const Appointments = require("../models/Appointments")

const listFunc = (where) => {
    return Appointments.find(where || {}).populate({
        path: "user_id",
        select: "fullName email"
    }).sort({ createdAt: -1 });
}

const insertFunc = (data) => {
    const newAppointment = new Appointments(data);
    return newAppointment.save()
}


const updateFunc = (data, id) => {
    return Appointments.findByIdAndUpdate(id, data, {new: true})
}


module.exports = {
    insertFunc,
    listFunc,
    updateFunc
} 