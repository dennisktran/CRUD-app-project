const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user: {type: String, required: true},
  url: {type: String, required: true},
  info: String,
  title: {type: String, required: true},
  likes: Number,
  dislikes: Number,
  comments: String
})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
