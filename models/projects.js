// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Projects Model
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  github: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  technologies: { type: Array, required: true },
  images: {type: Array},
  isVisible: {type: Boolean },
  url : {type: String},
  git: {type: String, required: true}
})

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;