const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addImg, uploadImg, getImgs, deleteImg, editeImg, updateImg} = require('../controllers/index.img.controllers')

router.get('/user/img', getImgs)

router.get('/user/add', verifyToken, addImg)

router.post('/user/img/upload',verifyToken, uploadImg)

router.get('/user/img/delete/:id',verifyToken,deleteImg)

router.get('/user/img/edite/:id',verifyToken, editeImg)

router.get('/user/img/edite/:id',verifyToken, updateImg)

router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router