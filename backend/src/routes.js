const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');



const routes = express.Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.index);

routes.post('/sessions', SessionController.create);

routes.post('profile', ProfileController.create);


module.exports = routes;