const express = require('express');

const UsersController = require('../controllers/user');

const router = express.Router();

router.post('/user/signin', UsersController.signin);
router.post('/user/signup', UsersController.signup);

module.exports = router;
