const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user: {type: String, required: true},
  url: {type: String, required: true},
  title: {type: String, required: true},
  likes: [String],
  dislikes: [String],
  comments: [String],
  tags:{type: String, required: true}
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;

//req.body.url splice watch?v, join embed
//do it in create route
