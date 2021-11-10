const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addLike}= require('../controllers/index.likes.controlers')
const { verify } = require('jsonwebtoken')


router.post('/img/like/add/:id', verifyToken, addLike)



module.exports = router