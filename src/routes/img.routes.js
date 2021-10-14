const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const { uploadImg, getImgs, deleteImg, updateImg, } = require('../controllers/index.img.controllers')
const { verify } = require('jsonwebtoken')

router.get('/img',verifyToken, getImgs)

router.post('/img/upload', verifyToken, uploadImg)

router.delete('/img/delete/:id',verifyToken, deleteImg)

router.put('/img/update/:id',verify, updateImg)


router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router