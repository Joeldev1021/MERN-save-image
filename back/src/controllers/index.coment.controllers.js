const createError = require("http-errors");
const ImgSchema = require("../models/ImgSchema");
const CommentSchema = require("../models/ComentSchema");
const ComentSchema = require("../models/ComentSchema");

const getComentByImg = async (req, res) => {
  res.json("get coment");
};

const getAllComent = async (req, res) => {
  // await ImgSchema.findById(req.params.id).populate("comments");
  const comment = await CommentSchema.find({ imgId: req.params.id }).populate("userId", { password: 0 }).sort({ createdAt: -1 });
  res.json(comment);
};

const addComment = async (req, res, next) => {
  const img = await ImgSchema.findById(req.body.imgId);
  if (!img) return next(createError(404, "Img not found"));

  const comment = new CommentSchema({
    comment: req.body.comment,
    imgId: req.body.imgId,
    userId: req.user._id
  });
  const comentSave = await comment.save();
  // get comment with user
  const comentPopulate = await ComentSchema.findById(comentSave._id).populate("userId", { password: 0 });
  img.comments.push(comment._id);
  await img.save();
  res.json(comentPopulate);
};

const updateComentById = async (req, res) => {
  res.json("update coment");
};

const deleteComent = async (req, res, next) => {
  res.json("delete coment");
};

module.exports = { getComentByImg, getAllComent, addComment, updateComentById, deleteComent };
