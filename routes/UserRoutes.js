const express = require("express")
const router = express.Router()
 
// Controller
const { register, login, getCurrentUser, update, getUserById, deleteUser } = require("../controllers/UserController")


//Middlewares
const validate = require('../middlewares/handleValidation')
const { userCreateValidation, loginValidation, userUpdateValidation } = require('../middlewares/userValidation')
const authGuard = require("../middlewares/authGuard")

// Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/:id", authGuard, userUpdateValidation(), validate, update)
router.get("/:id", authGuard, getUserById)
router.delete("/:id", authGuard, deleteUser)

module.exports = router