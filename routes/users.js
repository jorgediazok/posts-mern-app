const express = require('express');

const UsersController = require('../controllers/user');

const router = express.Router();

router.post('/signin', UsersController.signin);
router.post('/signup', UsersController.signup);

module.exports = router;
