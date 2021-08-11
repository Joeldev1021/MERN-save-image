const mongoose = require('mongoose')
const path = require('path')
const {Schema} = mongoose

const imgSchema = new Schema({
    title: String,
    NameUser: String,
    nameImg: String,
    idUser: Schema.Types.ObjectId,
    description:String,
    originalname: String,
    path: String,
    filename: String,
    imgExtname: path.extname(filename)
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})