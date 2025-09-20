// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    req.flash('error', 'You must be logged in to access this page');
    return res.redirect('/auth/login');
  }
};

// Middleware to check if user is NOT authenticated (for login/register pages)
const requireGuest = (req, res, next) => {
  if (req.session && req.session.userId) {
    return res.redirect('/');
  } else {
    return next();
  }
};

// Middleware to pass user info to all views
const setUserInfo = (req, res, next) => {
  res.locals.user = req.session.userId ? req.session.user : null;
  res.locals.isAuthenticated = !!req.session.userId;
  next();
};

module.exports = {
  requireAuth,
  requireGuest,
  setUserInfo
};