const ctrlImg = {};
const fs = require("fs");
const createError = require("http-errors");

const { cloudinaryAdd, cloudinaryDelete } = require("../helper/cloudinary");

// Schema Image
const ImgSchema = require("../models/ImgSchema");

ctrlImg.getImgById = async (req, res, next) => {
  const id = req.params.id;
  console.log("hola");
  try {
    const img = await ImgSchema.findById(id).populate("comments");
    if (!img) throw createError.BadRequest("image not found");

    return res.json(img);
  } catch (error) {
    next(error);
  }
};
// get img by id user
ctrlImg.getImgs = async (req, res, next) => {
  // req.token = token
  try {
    const imgs = await ImgSchema.find({ userId: req.user.id });
    if (!imgs) throw createError.badRequest("not found image");
    res.json(imgs);
  } catch (error) {
    next(error);
  }
};

// get all img
ctrlImg.getAllImg = async (req, res, next) => {
  try {
    const img = await ImgSchema.find().populate("userId", { password: 0 });
    if (!img) throw createError.BadRequest("not found images");

    return res.json(img);
  } catch (error) {
    next(error);
  }
};

ctrlImg.uploadImg = async (req, res, next) => {
  const img = await new ImgSchema();

  try {
    if (!req.files) throw createError.BadRequest();
    if (!req.body.title || !req.body.description) { throw createError.Unauthorized("you have complete form"); }
    const imgCloud = await cloudinaryAdd(req.files.image.tempFilePath);
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
    const img = await ImgSchema.findByIdAndRemove(id);
    if (!img) throw createError.BadRequest("image not found");
    // cut url
    const imgCut = img.imgUrl.split("/")[7].split(".")[0];
    // delete img cloudinary
    await cloudinaryDelete(imgCut);

    return res.json(img);
  } catch (error) {
    next(error);
  }
};

ctrlImg.updateImg = async (req, res, next) => {
  const id = req.params.id;
  console.log(req.body);
  try {
    const img = await ImgSchema.findByIdAndUpdate(id, req.body);
    if (!img) throw createError.BadRequest("image not found");

    return res.json(img);
  } catch (error) {
    next(error);
  }
};

module.exports = ctrlImg;
