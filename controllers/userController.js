const User = require('../models/User');

module.exports = {
    createUser: async (req, res) => {
        console.log(req.body)
        try {
        const createUser = await User.create(req.body);
        res.redirect('/user/index.ejs')
        } catch(err) {
            res.send(err);
        }
    }
}