const express = require('express');
const { verify } = require('../middlewares/verify');
const {getConversations , addConversation} = require('../controllers/conversation');
const router = express.Router();
router.get('' , verify , getConversations)
router.post('' , addConversation)

module.exports = router;