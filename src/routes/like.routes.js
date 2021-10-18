const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addLike,getAllLikes,deleteLikes,getLikes}= require('../controllers/index.likes.controlers')
const { verify } = require('jsonwebtoken')

router.get('/like',verifyToken, getLikes)

router.get('/like/all', verifyToken, getAllLikes)

router.post('/like', verifyToken, addLike)

router.post('/like/delete', verifyToken, deleteLikes)








module.exports = router