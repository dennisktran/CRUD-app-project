const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const isLogged = (req, res, next) =>{
    if (req.session.logged){
        next()
    } else {
        res.redirect("/")
    }
}

router.post('/login', userController.logIn);
router.post('/signup', userController.createUser);
router.get('/logout',isLogged, userController.logOut);
router.get('/:id',isLogged, userController.home);
router.delete('/:id', isLogged, userController.deleteUser);
router.put('/:id', isLogged, userController.editUser);

module.exports = router;

