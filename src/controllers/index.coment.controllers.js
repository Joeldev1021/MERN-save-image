const crltComent = {};

const createError = require("http-errors");
const ImgSchema = require('../models/ImgSchema')
const CommentSchema = require('../models/ComentSchema')

crltComent.getComentByImg = async (req, res) => {
    res.json('get coment')
};

crltComent.getAllComent = async (req, res) => {
    const img = await ImgSchema.findById(req.params.id).populate('comments')
    console.log(img)
   res.json('get all coment')
};


crltComent.addComment = async (req, res) => {
    const img = await ImgSchema.findById(req.body.imgId)
    if(!img) return next(createError(404, 'Img not found'))

    comment = new CommentSchema({
        comment: req.body.comment,
        imgId: req.body.imgId,
        userId: req.user._id
    })
    await comment.save()
    img.comments.push(comment._id)
    await img.save()
    res.json(comment)
};


crltComent.updateComentById = async (req, res) => {
    res.json('update coment')
}


crltComent.deleteComent = async (req, res, next) => {
    res.json('delete coment')
};

module.exports = crltComent;
