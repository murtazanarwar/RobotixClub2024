const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup); //sign up
router.post('/login', authController.login); //login
router.post('/google', authController.googleAuth); //start the Google authentication process
router.get('/google/callback', authController.googleAuthCallback); //handle the Google callback

module.exports = router;