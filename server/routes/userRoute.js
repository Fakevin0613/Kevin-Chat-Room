const { register, login, setpersonal, getContacts} = require('../controller/userController');

const router = require('express').Router();
router.post("/register", register)
router.post("/login", login)
router.post("/setpersonal/:id", setpersonal)
router.get("/contacts/:id", getContacts)

module.exports = router;