const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      url: String,
      filename: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
