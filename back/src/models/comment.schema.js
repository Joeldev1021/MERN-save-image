const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ComentSchema = new Schema({
  comment: String,
  imgId: { type: Schema.ObjectId, ref: "Img" },
  userId: { type: Schema.ObjectId, ref: "User" }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

module.exports = model("Coment", ComentSchema);
