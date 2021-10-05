const express = require('express')
const router = express.Router()

const {getProfile, singUp, singIn, renderSingInForm, logout}  = require('../controllers/index.user.controllers')
const veryToken = require('../middleware/verifyToken')

router.get('/auth/profile',veryToken, getProfile)

router.post('/signup', singUp)

router.get('/signin', renderSingInForm)

router.post('/signin', singIn)

router.post('/logout', logout)


module.exports = router