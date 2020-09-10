const express = require('express');
const authController = require('./controllers/auth.controller');
const { validateBody } = require('./middlewares');
const errorHandler = require('./errors/errorHandler');

function createApp() {
  const app = express();
  app.use(express.json());

  // ROUTING
  app.post('/signup', validateBody, authController.signUpUser);
  //

  app.use(errorHandler);
  return app;
}

module.exports = createApp;
