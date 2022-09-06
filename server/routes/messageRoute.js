const { addMessage, getAllMessage } = require('../controller/messageController');


const router = require('express').Router();

router.post("/addMessage", addMessage)
router.post("/getAllMessage", getAllMessage)

module.exports = router;