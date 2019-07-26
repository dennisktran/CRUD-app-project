const User = require('../models/User');
const Video = require('../models/Videos');
const bcrypt  = require('bcryptjs');

module.exports = {
    logIn: async (req, res) => {
        try{
            const foundUser = await User.findOne({name: req.body.name});
            if(foundUser) {
                if(bcrypt.compareSync(req.body.password, foundUser.password)){
                    req.session.userId = foundUser._id;
                    req.session.name = foundUser.name;
                    req.session.logged = true;
                    res.redirect('/user/' + foundUser._id)
                } else {
                    req.session.message = 'Username or password incorrect'
                    res.redirect('/')
                }
            } else {
                req.session.message = 'Username or password incorrect'
                res.redirect('/')
            }
        } catch(err) {
            res.rend(err);
        }
    },
    logOut: async (req, res) => {
        try{
            const destroy = await req.session.destroy();
            res.redirect('/')
        } catch(err) {
            res.send(err)
        }
    },
    home: async (req, res) => {
        try{
            const foundUser = await User.findById(req.params.id);
            res.render('user/index.ejs', {
                user: foundUser
            });
            console.log(req.params.id)
        } catch(err) {
            res.send(err);
        };
    },
    createUser: async (req, res) => {
        const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        req.body.password = hashedPassword;
        try {
            const createdUser = await User.create(req.body);
            req.session.userId = createdUser._id;
            req.session.username = createdUser.name;
            req.session.logged = true;
             res.redirect('/user/' + createdUser._id);

        } catch(err) {
            res.send(err);
        }
    },
    deleteUser: async (req, res) => {
        try{
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            // const deleteVideo = await Video.remove({ _id: {$in: deleteUser.videos}});
            res.redirect('/');
        } catch(err) {
            res.send(err);
        }
    }
}