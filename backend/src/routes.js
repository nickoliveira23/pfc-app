const express = require('express');

const authMiddle = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.indexAll);

routes.post('/session', SessionController.login);

routes.post('/profile', ProfileController.create);
routes.get('/profile', ProfileController.index);

routes.get("/test", authMiddle, (req, res) => {
    res.send('Very secret number 10!');
  })


module.exports = routes;