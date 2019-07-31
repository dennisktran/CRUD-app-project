const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

const isLogged = (req, res, next) =>{
    if (req.session.logged){
        next()
    } else {
        res.redirect("/")
    }
}

router.post('/:id',isLogged, videoController.createVideo);
router.delete('/:id',isLogged, videoController.delete);
router.put('/:id',isLogged, videoController.edit);
router.get('/:id', videoController.show);
// router.get('/:id/login', videoController.loginShow);
router.put('/:id/like', isLogged, videoController.updateLike);
router.put('/:id/dislike', isLogged, videoController.updateDislike);
router.put('/:id/comments', isLogged, videoController.comments);
module.exports = router;
