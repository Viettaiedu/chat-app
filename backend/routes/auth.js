const express = require('express');
const {register,login , getUser, updateUser} = require('../controllers/auth');
const router = express.Router();

router.post('/register' , register )
router.post('/login' , login )
router.get('/find/:_id', getUser )
router.post('/update', updateUser )


module.exports = router;