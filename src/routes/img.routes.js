const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const { uploadImg, getImgs, deleteImg, editeImg, } = require('../controllers/index.img.controllers')

router.get('/img',verifyToken, getImgs)

router.post('/img/upload', verifyToken, uploadImg)

router.get('/img/delete/:id', deleteImg)

router.get('/img/edite/:id', editeImg)


router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router