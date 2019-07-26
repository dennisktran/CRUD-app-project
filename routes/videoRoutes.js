const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

<<<<<<< HEAD
router.post('/:id', videoController.createVideo);
=======
>>>>>>> 81b27c8c3de5e1d633b6af899c2a1838dbc94d68
router.delete('/:id', videoController.delete)
module.exports = router;
``