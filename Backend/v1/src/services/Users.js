const Users = require("../models/Users")

const listFunc = () => {
    return Users.find({})
}

const insertFunc = (data) => {
    const newModel = new Users(data);
    return newModel.save()
}

const loginUserFunc = (data) => {
const user = Users.findOne(data)

    return user
}

const getUserByIdFunc = (id) => {
    return Users.findById(id)
}

const updateUserFunc = (id, data) => {
    return Users.findByIdAndUpdate(id, data, { new: true })
}

const deleteUserFunc = (id) => {
    return Users.findByIdAndDelete(id)
}


const resetPasswordFunc = (where, data) => {
    return Users.findOneAndUpdate(where , data, { new: true })
}

module.exports = {
    insertFunc,
    loginUserFunc,
    listFunc,
    getUserByIdFunc,
    resetPasswordFunc,
    updateUserFunc,
    deleteUserFunc
}