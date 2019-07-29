const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/:id', videoController.createVideo);
router.delete('/:id', videoController.delete)
module.exports = router;
``
