const express = require('express');

const authMiddle = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/user/list', UserController.index);
routes.post('/user/register', UserController.create);
routes.get('/user/listAll', UserController.indexUserProfile);
routes.post('/user/emailVerify', UserController.verifyEmail);
routes.post('/user/passwordVerify', UserController.verifyPassword);

routes.post('/session', SessionController.login);

routes.post('/profile/register', ProfileController.create);
routes.get('/profile/list', ProfileController.index);
routes.post('/profile/verify', ProfileController.verify);


routes.get("/test", authMiddle, (req, res) => {
    res.send('Very secret number 10!');
  })


module.exports = routes;