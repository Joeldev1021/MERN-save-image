const crltLikes = {};


const createError = require("http-errors");
const ImgSchema = require('../models/ImgSchema')
const LikeSchema = require("../models/LikeSchema");

crltLikes.getLikes = async (req, res, next) => {
    
};

crltLikes.getAllLikes = async (req, res) => {
  
};

crltLikes.addLike = async (req, res) => {

    const {id} = req.params;
    if(!id) throw createError.NotFound("not found img");
    const img = await ImgSchema.findById(id)
    
    if(img) {
      if(!img.likes.includes(req.user._id)) {
        img.likes = img.likes.concat(req.user._id)
        await img.save()
      }else {
        img.likes = img.likes.filter(like => like.toString() !== req.user._id.toString())
        await img.save()
      }
      res.json(img)
    }
     
};




module.exports = crltLikes;
