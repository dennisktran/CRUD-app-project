const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    passwordcheck: {type: String, required: true},
    email: {type: String, required: true},
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
      }],
    likes: Number,
    dislikes: Number,
    pic: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;