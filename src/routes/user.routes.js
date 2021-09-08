const express = require('express')
const router = express.Router()

const {renderSignUpForm, singUp, singIn, renderSingInForm, logout}  = require('../controllers/index.user.controllers')

router.get('/signup', renderSignUpForm)

router.post('/signup', singUp)

router.get('/signin', renderSingInForm)

router.post('/signin', singIn)

router.get('/logout', logout)


module.exports = router