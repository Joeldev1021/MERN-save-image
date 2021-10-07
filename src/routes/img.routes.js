const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const {addImg, uploadImg, getImgs, deleteImg, editeImg, updateImg} = require('../controllers/index.img.controllers')

router.get('/img', getImgs)

router.get('/add', addImg)

router.post('/img/upload', verifyToken, uploadImg)

router.get('/img/delete/:id', deleteImg)

router.get('/img/edite/:id', editeImg)

router.get('/img/edite/:id', updateImg)

router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router