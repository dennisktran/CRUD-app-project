const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.logIn);
router.post('/signup', userController.createUser);
router.get('/logout', userController.logOut);
router.get('/:id', userController.home);
router.delete('/:id', userController.deleteUser);
<<<<<<< HEAD
router.put('/:id', userController.editUser);
=======
router.put('/:id/edit', userController.editUser);
>>>>>>> 81b27c8c3de5e1d633b6af899c2a1838dbc94d68

module.exports = router;