const express = require('express')
const router = express.Router()

const {addImg, uploadImg, getImgs, deleteImg, editeImg, updateImg} = require('../controllers/index.img.controllers')

router.get('/', getImgs)

router.get('/addImg', addImg)

router.post('/upload', uploadImg)

router.get('/delete/:id', deleteImg)

router.get('/edite/:id', editeImg)

router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})




module.exports = router