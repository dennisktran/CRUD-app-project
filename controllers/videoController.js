const Video = require('../models/Videos');
const User = require('../models/User');

module.exports = {
  delete: async (req, res) => {
      try{
          const findUser = await User.findOne(req.params.id)
          const deleteVideo = await Video.findByIdAndDelete('req.params.id)
          findUser.video
          res.redirect('/user');
      } catch(err) {
          res.send(err);
      }
  }

}
