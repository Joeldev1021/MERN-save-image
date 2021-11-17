const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addComment, getAllComent, deleteComent,updateComentById, getComentByImg} = require('../controllers/index.coment.controllers')


router.get('/img/coment',verifyToken, getComentByImg)

router.get('/img/coment/all/:id',verifyToken, getAllComent)

router.post('/img/comment/add/:id', verifyToken, addComment)

router.put('/img/coment/edite/:id', verifyToken, updateComentById)

router.delete('/img/coment/delete/:id', verifyToken, deleteComent)

module.exports = router
