const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.delete('/:id', videoController.delete)
module.exports = router;
