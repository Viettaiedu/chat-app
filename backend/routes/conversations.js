const express = require('express')
const {getConversation , addConversation} = require('../controllers/conversation');
const router = express.Router();
router.get('' , getConversation)
router.post('' , addConversation)

module.exports = router;