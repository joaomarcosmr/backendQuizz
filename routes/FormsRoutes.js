const express = require("express")
const router = express.Router()

// Controller
const { createForm, getAllFormsByUserId, updateForm, getFormById, deleteForm } = require("../controllers/FormsController")


//Middlewares
const authGuard = require("../middlewares/authGuard")

// Routes
router.post("/", createForm)
router.get("/", authGuard, getAllFormsByUserId)
router.put("/:id", authGuard, updateForm)
router.get("/:id", authGuard, getFormById)
router.delete("/:id", authGuard, deleteForm)

module.exports = router