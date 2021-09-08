const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addImg, uploadImg, getImgs, deleteImg, editeImg, updateImg} = require('../controllers/index.img.controllers')

router.get('/', getImgs)

router.get('/addImg', addImg)

router.post('/upload', uploadImg)

router.get('/delete/:id',verifyToken, deleteImg)

router.get('/edite/:id',verifyToken ,editeImg)

router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router