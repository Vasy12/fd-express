module.exports = function parseBody(req, res, next) {
  switch (req.get('Content-Type')) {
    case 'application/json':
      req.body = JSON.stringify(req.body);
      console.log(req.body);
    default:
      break;
  }

  next();
};
