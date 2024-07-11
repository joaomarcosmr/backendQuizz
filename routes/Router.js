const express = require("express")
const router = express.Router()

router.use("/users", require("./UserRoutes"))
router.use("/forms", require("./FormsRoutes"))

module.exports = router