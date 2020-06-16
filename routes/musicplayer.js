const express= require('express');
//importing touter method of express
const router= express.Router();

//importing passport
const passport = require('passport');

//getting homecontroller to use its functions
const homeController = require('../controllers/home_controller');
const { Passport } = require('passport');

router.get('/musicplayer',homeController.musicplayer);

//getting musicplayer function of homecontroller // use passport middleware to authenticate
router.post('/musicplayer',passport.authenticate(
    'local',
    { failureRedirect: 'back' }
),homeController.CreateSession);

//for destroy the session and signout
router.get('/sign-out',homeController.deleteSession);

//get information from google
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'back'}), homeController.CreateSession);



module.exports= router;