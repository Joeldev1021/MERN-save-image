const ctrlImg = {};
const path = require('path')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const {cloudinaryFunc} = require('../helper/cloudinary')

//Schema Image
const ImgSchema = require('../models/ImgSchema')


ctrlImg.getImgs = async(req,res )=>{
    // req.token = token
    // const userId =  jwt.verify(token, process.env.SECRET_TOKEN_KEY).id
    // const img = await ImgSchema.find().lean()   
    // res.render('listImg', {img})
}

ctrlImg.addImg = (req, res) => {
  // console.log('hola', req.token)
  // res.render("formImg");
};

ctrlImg.uploadImg = async (req, res, next) => {
  const img = await new ImgSchema()
  try {
    const imgCloud = await cloudinaryFunc(req.files.image.tempFilePath)
    if(!imgCloud) throw createError.Unauthorized("not provided image")
    img.title = req.body.title
    img.description = req.body.description
    img.userId = req.user.id
    img.imgUrl = imgCloud.url
    await img.save();
    await fs.unlink(req.files.image.tempFilePath, ()=>console.log('deleted'))
    res.json("img")   
  } catch (error) {
     next(error)
  }
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
