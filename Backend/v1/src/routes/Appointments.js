const express = require("express");
const {create, index, slots,update, myAppointment, search} = require("../controllers/Appointments");
const validateMiddleware = require("../middlewares/validateMiddleware");
const schema = require("../validations/Appointments");
const authenticationTokenMiddleware = require("../middlewares/authenticationTokenMiddleware");
const objectIdValidater = require("../middlewares/ObjectIdValidater");
const router = express.Router();

router.route("/").get(authenticationTokenMiddleware, index)
router.route("/slots").get(authenticationTokenMiddleware, slots)
router.route("/").post(authenticationTokenMiddleware, validateMiddleware(schema.createValidation), create)
router.route("/search").post(authenticationTokenMiddleware, validateMiddleware(schema.searchValidation), search)
router.route("/:id").patch(objectIdValidater, authenticationTokenMiddleware, validateMiddleware(schema.updateValidation), update)

module.exports = router


