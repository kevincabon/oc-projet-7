const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.post('/profile', userController.profile);
router.get('/profile/:id', userController.publicProfile);

module.exports = router;