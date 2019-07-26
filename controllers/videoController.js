const Video = require('../models/Videos');
const User = require('../models/User');

module.exports = {
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
  }
}
