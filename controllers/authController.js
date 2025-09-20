const User = require('../models/User');

// Show registration form
const showRegister = (req, res) => {
  res.render('register', { 
    title: 'Register',
    messages: req.flash()
  });
};

// Handle registration
const register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, phone } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      req.flash('error', 'Passwords do not match');
      return res.redirect('/auth/register');
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      req.flash('error', 'User with this email or username already exists');
      return res.redirect('/auth/register');
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      phone
    });

    await user.save();

    req.flash('success', 'Registration successful! Please log in.');
    res.redirect('/auth/login');
  } catch (error) {
    console.error('Registration error:', error);
    req.flash('error', 'Registration failed. Please try again.');
    res.redirect('/auth/register');
  }
};

// Show login form
const showLogin = (req, res) => {
  res.render('login', { 
    title: 'Login',
    messages: req.flash()
  });
};

// Handle login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username or email
    const user = await User.findOne({
      $or: [{ username }, { email: username }]
    });

    if (!user) {
      req.flash('error', 'Invalid username/email or password');
      return res.redirect('/auth/login');
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      req.flash('error', 'Invalid username/email or password');
      return res.redirect('/auth/login');
    }

    // Create session
    req.session.userId = user._id;
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    req.flash('success', `Welcome back, ${user.username}!`);
    res.redirect('/');
  } catch (error) {
    console.error('Login error:', error);
    req.flash('error', 'Login failed. Please try again.');
    res.redirect('/auth/login');
  }
};

// Show forgot password form
const showForgotPassword = (req, res) => {
  res.render('forgot', { 
    title: 'Forgot Password',
    messages: req.flash()
  });
};

// Handle forgot password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      req.flash('error', 'No account found with that email address');
      return res.redirect('/auth/forgot');
    }

    // In a real application, you would send an email with reset link here
    // For now, we'll just show a success message
    req.flash('success', 'Password reset instructions have been sent to your email');
    res.redirect('/auth/login');
  } catch (error) {
    console.error('Forgot password error:', error);
    req.flash('error', 'An error occurred. Please try again.');
    res.redirect('/auth/forgot');
  }
};

// Handle logout
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      req.flash('error', 'Error logging out');
      return res.redirect('/');
    }
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
};

module.exports = {
  showRegister,
  register,
  showLogin,
  login,
  showForgotPassword,
  forgotPassword,
  logout
};