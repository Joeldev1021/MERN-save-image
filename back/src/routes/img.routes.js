const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const ImgController = require('../controllers/image.controllers');

router.get('/', verifyAuth, ImgController.findByUserId);

router.get('/all', ImgController.findAll);

router.get('/:id', verifyAuth, ImgController.findById);

router.post('/upload', ImgController.create);

router.put('/:id', verifyAuth, ImgController.update);

router.delete('/:id', ImgController.delete);

module.exports = router;
