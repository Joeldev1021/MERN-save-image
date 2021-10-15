const ctrlImg = {};
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const createError = require("http-errors");

const { cloudinaryFunc } = require("../helper/cloudinary");

//Schema Image
const ImgSchema = require("../models/ImgSchema");

ctrlImg.getImgs = async (req, res) => {
  // req.token = token
  try {
    const imgs = await ImgSchema.find({ userId: req.user.id });
    if (!imgs) throw createError.badRequest("not found image");

    res.json(imgs);
  } catch (error) {
    next(error);
  }
};

ctrlImg.uploadImg = async (req, res, next) => {
  const img = await new ImgSchema();

  try {
    if (!req.files) throw createError.BadRequest();
    if (!req.body.title || !req.body.description)
      throw createError.Unauthorized("you have complete form");
    const imgCloud = await cloudinaryFunc(req.files.image.tempFilePath);
    if (!imgCloud) throw createError.Unauthorized("not provided image");
    img.title = req.body.title;
    img.description = req.body.description;
    img.userId = req.user.id;
    img.imgUrl = imgCloud.url;
    const imgSave = await img.save();
    await fs.unlink(req.files.image.tempFilePath, () => console.log("deleted"));
    res.json(imgSave);
  } catch (error) {
    next(error);
  }
};

ctrlImg.deleteImg = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleteImg = await ImgSchema.findByIdAndRemove(id);
    if (!deleteImg) throw createError.BadRequest("image not found");

    return res.json(deleteImg);
  } catch (error) {
    next(error);
  }
};

ctrlImg.updateImg = async (req, res, next) => {
  const id = req.params.id;
  console.log(req.body)
  try {
    const img = await ImgSchema.findByIdAndUpdate(id, req.body);
    if (!img) throw createError.BadRequest("image not found");
    
    return res.json(img);
  } catch (error) {
    next(error)
  }
};


module.exports = ctrlImg;
