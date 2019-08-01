const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session')
const app            = express();
const userRoutes =  require('./routes/userRoutes');
const videoRoutes =  require('./routes/videoRoutes');

require('dotenv').config()
const PORT = process.env.PORT

const User = require('./models/User');
const Video = require('./models/Videos');

require('./db/db');

//INCLUDE ROUTES
app.use(session({
  secret: 'THIS IS A RANDOM SECRET STRING',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use('/user', userRoutes);
app.use('/video', videoRoutes);

app.get('/', async (req, res) => {
  try{
    const displayVids = await Video.find({})
    let mostLikes = 0;
    let likedVideo = {};
    for(let i = 0; i < displayVids.length; i++) {
        if(displayVids[i].likes.length > mostLikes)
        mostLikes = displayVids[i].likes.length;
        likedVideo = displayVids[i];
    }
    const user = await User.findOne({name: likedVideo.user}).populate('videos');
    console.log(user)
    res.render('index.ejs', {
      logged: req.session.logged,
      likedVideo: likedVideo,
      userID: req.session.userId,
      videos: displayVids,
      user: user
    });
    // console.log(user, '<------ popular user');
    // console.log(likedVideo, '<------ popular video');
  } catch(err){
    console.log(err)
  }
});

app.put('/like', async (req, res) => {
  try{

  }catch(err) {
    res.send(err);
  }
})

app.listen(PORT, () => {
  console.log('listening..... on port 3000');
});
