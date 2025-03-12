const express = require("express")
const userController = require("../CONTROLLER/usercontroller")
const User = require("../MODELS/UserModel")

const router = express.Router()
router.post("/add-Users",userController.userCreate)
module.exports = router