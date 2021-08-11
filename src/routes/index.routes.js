const express = require('express')
const router = express.Router()

const {indexRouteImg, uploadImg} = require('../controllers/index.img.controllers')

router.get('/',indexRouteImg)


router.get('/service',(req, res)=>{
    res.json('service')
})

router.get('/hola',(req, res)=>{
    res.json('hola')
})

router.post('/upload',uploadImg)


module.exports = router