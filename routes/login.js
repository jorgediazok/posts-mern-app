const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');

router.route('/signup').post(UsersController.signup);
router.route('/login').post(UsersController.login);
router.route('/logout').post(UsersController.logout);

module.exports = router;
