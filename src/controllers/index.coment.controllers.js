const crltComent = {};

const Note = require("../models/Note");

const createError = require("http-errors");
const ImgSchema = require('../models/ImgSchema')

crltComent.getComentByImg = async (req, res) => {
    res.json('get coment')
};

crltComent.getAllComent = async (req, res) => {
   res.json('get all coment')
};


crltComent.addComment = async (req, res, next) => {
    console.log(req.body)
    console.log('hola')
    res.json({
        message: 'add coment'
    })
};


crltComent.updateComentById = async (req, res) => {
    res.json('update coment')
}


crltComent.deleteComent = async (req, res, next) => {
    res.json('delete coment')
};

module.exports = crltComent;
