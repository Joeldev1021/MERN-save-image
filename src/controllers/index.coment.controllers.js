const crltComent = {};

const Note = require("../models/Note");
const createError = require("http-errors");

const Coment = require("../models/ComentSchema");

crltComent.getComentByImg = async (req, res) => {
    res.json('get coment')
};

crltComent.getAllComent = async (req, res) => {
   res.json('get all coment')
};


crltComent.addComent = async (req, res, next) => {
    res.json('add coment')
};


crltComent.updateComentById = async (req, res) => {
    res.json('update coment')
}


crltComent.deleteComent = async (req, res, next) => {
    res.json('delete coment')
};

module.exports = crltComent;
