const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ success: null, message: 'Unauthorized: You must be logged in.' });
};

export default isAuthenticated;
