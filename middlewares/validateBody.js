const { SIGN_UP_SCHEMA } = require('./../utils/validation');

module.exports = async function validateBody(req, res, next) {
  const { body } = req;
  try {
    const validatedBody = await SIGN_UP_SCHEMA.validate(body);
    req.body = validatedBody;
    next();
  } catch (e) {
    next(e);
  }
};
