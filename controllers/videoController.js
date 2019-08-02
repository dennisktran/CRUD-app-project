const Video = require('../models/Videos');
const User = require('../models/User');

module.exports = {
  show: async (req, res) => {
    const video = await Video.findById(req.params.id);
    const videos = await Video.find({});
    res.render('videos/show.ejs', {
      userID: req.session.userId,
      video: video,
      videos: videos,
      logged: req.session.logged
    })
  },
  createVideo: async (req, res) => {
    try{
        req.body.url = req.body.url.split("watch?v=").join("embed/")
        const createVideo = await Video.create(req.body);
        const findUser = await User.findById(req.params.id);
        findUser.videos.push(createVideo);
        await findUser.save();
        res.redirect(`/user/${req.params.id}`);
    }catch(err) {
<<<<<<< HEAD
      res.redirect('/');
=======
        res.redirect('/');
>>>>>>> 2b061c0930d84fa87cb1ee0d3af130e28703145c
    }
  },
  delete: async (req, res) => {
    try{
      const deleteVideo = await Video.findByIdAndRemove(req.params.id);
      const foundUser = await User.findOne({'videos': req.params.id});
      foundUser.videos.remove(req.params.id);
      await foundUser.save();
      res.redirect(`/user/${foundUser._id}`);
<<<<<<< HEAD

    } catch(err) {
      res.redirect('/');
=======
    } catch(err) {
>>>>>>> 2b061c0930d84fa87cb1ee0d3af130e28703145c
    }
  },
  edit: async (req, res) => {
    try{
      const video = await Video.findByIdAndUpdate(req.params.id, req.body);
      res.redirect(`/user/${req.session.userId}`);
    }catch(err){
<<<<<<< HEAD
      res.redirect('/');
=======
       res.redirect('/');
>>>>>>> 2b061c0930d84fa87cb1ee0d3af130e28703145c
    }
  },
  updateLike: async (req, res) => {
    try{
      const videoLike = await Video.findById(req.params.id);
      if(!videoLike.likes.includes(req.session.userId)) {
        videoLike.likes.push(req.session.userId);
      };
      if(videoLike.dislikes.includes(req.session.userId)) {
        videoLike.dislikes.splice(videoLike.dislikes.indexOf(req.session.userId), 1);
      };
      videoLike.save();
      res.redirect('/');
    }catch(err) {
<<<<<<< HEAD
      res.redirect('/');
=======
       res.redirect('/');
>>>>>>> 2b061c0930d84fa87cb1ee0d3af130e28703145c
    }
  },
  updateDislike: async (req, res) => {
    try{
      const videoLike = await Video.findById(req.params.id);
      if(!videoLike.dislikes.includes(req.session.userId)) {
        videoLike.dislikes.push(req.session.userId);
      };
      if(videoLike.likes.includes(req.session.userId)) {
        videoLike.likes.splice(videoLike.likes.indexOf(req.session.userId), 1);
      };
      videoLike.save();
      res.redirect('/');
    }catch(err) {
      res.redirect('/');
    }
  },
  comments: async (req, res) => {
  try{
    const video = await Video.findById(req.params.id);
    video.comments.push(req.body.comments);
    video.save();
    res.redirect(`/video/${req.params.id}`);
  }catch(err){
    res.redirect('/');
  }
}
}
