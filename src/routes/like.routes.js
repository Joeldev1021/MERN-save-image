const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addLike,getAllLikes,deleteLikes,getLikes}= require('../controllers/index.likes.controlers')
const { verify } = require('jsonwebtoken')

router.get('/like',verifyToken, getLikes)

router.get('/img/like/all', verifyToken, getAllLikes)

router.post('/img/like/add/:id', verifyToken, addLike)










module.exports = router