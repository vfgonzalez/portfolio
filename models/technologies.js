// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// User Model
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologiesSchema = new Schema({
  techCategory: { type: String, required: true },
  techname: { type: String, required: true },
  techimage: {type: String, required: false}
});

const Technologies = mongoose.model("Technologies", technologiesSchema);

module.exports = Technologies;