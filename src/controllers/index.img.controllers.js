const ctrlImg = {};
const path = require('path')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const ImgSchema = require('../models/ImgSchema')

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

ctrlImg.getImgs = async(req,res )=>{
    const token = localStorage.getItem('token')
    req.token = token
    const userId =  jwt.verify(token, process.env.SECRET_TOKEN_KEY).id
    const img = await ImgSchema.find().lean()   
    res.render('listImg', {img})
}

ctrlImg.addImg = (req, res) => {
  console.log('hola', req.token)
  res.render("formImg");
};

ctrlImg.uploadImg = async (req, res) => {
  const newImg = new ImgSchema()
  console.log(req.file)
  newImg.title = req.body.title
  newImg.description = req.body.description
  newImg.originalname = req.file.originalname
  newImg.path = req.file.path
  newImg.destination = req.file.destination
  newImg.filename= req.file.filename
  newImg.imgExtname = path.extname(req.file.filename)
  console.log(newImg)
  const imgSave = await newImg.save()
   await newImg.save()
   res.redirect('/user/img')

};

ctrlImg.deleteImg = async(req, res)=>{
    const id = req.params.id
    try {
    const deleteImg = await ImgSchema.findByIdAndDelete(id);
    await fs.unlink(deleteImg.path, ()=>console.log('deleted'))
    } catch (error) {
      console.log(error)
    }
    res.redirect('/img')
}

ctrlImg.editeImg = async(req, res)=> {
   const id = req.params.id
   const img = await ImgSchema.findById(id).lean()
  // console.log(img) 
    res.render('updateImg', {img})
}

ctrlImg.updateImg = async(req, res)=>{
  const id = req.params.id
  const img = await ImgSchema.findByIdAndUpdate(id, req.body)
  console.log(img)
  res.redirect('/img')
}


module.exports = ctrlImg;
