const ctrlImg = {};
const path = require('path')
const fs = require('fs')

const ImgSchema = require('../models/ImgSchema')


ctrlImg.getImgs = async(req,res )=>{
    const imgs = await ImgSchema.find().lean()

    res.render('listImg', {imgs})
}

ctrlImg.addImg = (req, res) => {
  res.render("index.hbs");

};

ctrlImg.uploadImg = async (req, res) => {
  const newImg = new ImgSchema()
  newImg.title = req.body.title
  newImg.description = req.body.description
  newImg.originalname = req.file.originalname
  newImg.path = req.file.path
  newImg.destination = req.file.destination
  newImg.filename= req.file.filename
  newImg.imgExtname = path.extname(req.file.filename)
  console.log(newImg)
  //const imgSave = await newImg.save()
   await newImg.save()
   res.redirect('/img')

};

ctrlImg.deleteImg = async(req, res)=>{
    const id = req.params.id
    try {
    const deleteImg = await ImgSchema.findByIdAndDelete(id);
    await fs.unlink(deleteImg.path, ()=>console.log('deleted'))
    } catch (error) {
      console.log(error)
    }
    res.redirect('/')
}

ctrlImg.updateImg = async (req, res)=>{
   console.log(req.params)
    res.json('update')
}


module.exports = ctrlImg;
