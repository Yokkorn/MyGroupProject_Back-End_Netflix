module.exports = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    err.statusCode = 400;
  } else if (err.name === 'TokenExpiredError') {
    err.statusCode = 401;
  } else if (err.name === 'JsonWebTokenError') {
    err.statusCode = 401;
  }
  console.log(err);

  res.status(err.statusCode || 500).json({ message: err.message });
};
