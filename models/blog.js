// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Blog Posts Model
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  postTitle: { type: String, required: true },
  postDate: {type: Date , required: true , default: Date.now()},
  postBody : {type: String, required: true}
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;