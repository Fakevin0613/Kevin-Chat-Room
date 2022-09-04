const { register, login, setpersonal, getContacts, setRequest, setAccept, getFriends} = require('../controller/userController');

const router = require('express').Router();
router.post("/register", register)
router.post("/login", login)
router.post("/setpersonal/:id", setpersonal)
router.get("/contacts/:id", getContacts)
router.get("/friends/:id", getFriends)
router.post("/request/:id", setRequest)
router.post("/accept/:id", setAccept)

module.exports = router;