const ctrlImg = {};
const path = require('path')

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



module.exports = ctrlImg;
