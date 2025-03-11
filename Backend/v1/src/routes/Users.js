const express = require("express");
const {create, index, slots, resetPassword, login} = require("../controllers/Users");
const validateMiddleware = require("../middlewares/validateMiddleware");
const schema = require("../validations/Users");
const authenticationTokenMiddleware = require("../middlewares/authenticationTokenMiddleware");
const {myAppointment} = require("../controllers/Appointments");
const router = express.Router();

router.get("/", index)
router.route("/").post(validateMiddleware(schema.createValidation), create)
router.route("/login").post(validateMiddleware(schema.loginValidation), login)
router.route("/myAppointments").get(authenticationTokenMiddleware, myAppointment)
router.route("/resetPassword").post(validateMiddleware(schema.resetPasswordValidation), resetPassword)

module.exports = router

