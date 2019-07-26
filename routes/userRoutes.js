const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.logIn);
router.post('/signup', userController.createUser);
router.get('/logout', userController.logOut);
router.get('/:id', userController.home);
router.delete('/:id', userController.deleteUser);
router.put('/:id/edit', userController.editUser);


module.exports = router;