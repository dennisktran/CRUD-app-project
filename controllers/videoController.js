const Video = require('../models/Videos');
const User = require('../models/User');

module.exports = {
  show: async (req, res) => {
    
  },
  createVideo: async (req, res) => {
    try{
        const createVideo = await Video.create(req.body);
        const findUser = await User.findById(req.params.id);
        findUser.videos.push(createVideo);
        await findUser.save();
        res.redirect('/user/' + req.params.id);
    }catch(err) {
        console.log(err)
        res.send(err);
    }
  },

  delete: async (req, res) => {
    try{
      const deleteVideo = await Video.findByIdAndRemove(req.params.id);
      const foundUser = await User.findOne({'videos': req.params.id});
      foundUser.videos.remove(req.params.id);
      await foundUser.save();
      res.redirect(`/user/${foundUser._id}`);
      console.log(deleteVideo, '<---- deleted video')
    } catch(err) {
      console.log(err, 'this is the error')
    }
  
  }
}

