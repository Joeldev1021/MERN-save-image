const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addComent, getAllComent, deleteComent,updateComentById, getComentByImg} = require('../middleware/controllers/index.coment.controllers')
const { verify } = require('jsonwebtoken')

router.get('/img/coment',verifyToken, getComentByImg)

router.get('/img/coment/all',verifyToken, getAllComent)

router.post('/img/coment/add', verifyToken, addComent)

router.put('/img/coment/edite/:id', verifyToken, updateComentById)

router.delete('/img/coment/delete/:id', verifyToken, deleteComent)

