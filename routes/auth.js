const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { requireGuest } = require('../middleware/auth');

// Registration routes
router.get('/register', requireGuest, authController.showRegister);
router.post('/register', requireGuest, authController.register);

// Login routes
router.get('/login', requireGuest, authController.showLogin);
router.post('/login', requireGuest, authController.login);

// Forgot password routes
router.get('/forgot', requireGuest, authController.showForgotPassword);
router.post('/forgot', requireGuest, authController.forgotPassword);

// Logout route
router.post('/logout', authController.logout);
router.get('/logout', authController.logout);

module.exports = router;