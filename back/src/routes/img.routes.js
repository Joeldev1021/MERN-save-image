const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');
const ImgController = require('../controllers/image.controllers');

router.get('/', verifyToken, ImgController.findByUserId);

router.get('/all', ImgController.findAll);

router.get('/:id', ImgController.findById);

router.post('/upload', ImgController.create);

router.put('/:id', verifyToken, ImgController.update);

router.delete('/:id', ImgController.delete);

module.exports = router;
