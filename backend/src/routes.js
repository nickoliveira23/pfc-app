const express = require('express');

const auth = require('./middlewares/authMiddleware');
const upload = require('./middlewares/uploadImage');

const validate = require('./validators/userCredentials');


const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const PictureController = require('./controllers/PictureController');
const LikeController = require('./controllers/LikeController');
const NopeController = require('./controllers/NopeController');

const routes = express.Router();

/* USER */
routes.get('/user/list', UserController.index);
routes.post('/user/register', validate.user, UserController.create);

routes.post('/user/email', validate.email, UserController.validateEmail);

routes.post('/user/password', validate.password, UserController.validatePassword);

/* SESSION */
routes.post('/session', SessionController.login);

/* PROFILE */
routes.post('/profile/register', ProfileController.create);
routes.get('/profile/list', auth, ProfileController.index);
routes.get('/profile/match', auth, ProfileController.listMatch);
routes.get('/profile/:id', auth, ProfileController.indexById);
routes.put('/profile/update/:id', auth, ProfileController.updateProfile);
routes.post('/profile/verify', ProfileController.validate);

/* PICTURE */
routes.post('/upload-image/:id_profile', upload.single('image'), PictureController.uploadPicture);
routes.put('/update-image/:id_profile', auth, upload.single('image'), PictureController.updatePicture);
routes.get('/show-picture/:id', PictureController.showPicture);

/* LIKE/NOPE/MATCH */
routes.post('/like/:userId', auth, LikeController.store);
routes.post('/nope/:userId', auth, NopeController.store);

routes.delete('/cancelMatch/:target', auth, LikeController.cancelMatch);

module.exports = routes;