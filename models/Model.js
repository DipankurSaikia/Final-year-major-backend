const mongoose = require("mongoose")

const modelSchema = new mongoose.Schema({

  prompt: String,

  fileId: mongoose.Schema.Types.ObjectId,

  userId: mongoose.Schema.Types.ObjectId,

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Model", modelSchema)