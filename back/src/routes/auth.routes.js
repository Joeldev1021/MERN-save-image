const express = require('express');
const router = express.Router();
const AuthController = require('../controller/auth.controller');

router.post('/signup', AuthController.register);

router.post('/signin', AuthController.login);

router.post('/logout', AuthController.logout);

module.exports = router;
