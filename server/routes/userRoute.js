const { register, login, setpersonal} = require('../controller/userController');

const router = require('express').Router();
router.post("/register", register)
router.post("/login", login)
router.post("/setpersonal/:id", setpersonal)

module.exports = router;