const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  description: String,
  important: Boolean,
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Note", noteSchema);
