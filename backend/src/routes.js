const express = require('express');

const authMiddle = require('./middlewares/auth');

const uploadProfile = require('./middlewares/uploadImage');

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
routes.get('/profile/:id', ProfileController.indexById);
routes.put('/profile/update/:id', ProfileController.updateProfile);
routes.post('/profile/verify', ProfileController.verify);

routes.post('/profile/upload-image', uploadProfile.single('image'), async (request, response) => {
  if(request.file) {
      return response.status(200).json({
          erro: false,
          mensagem: 'Upload realizado com sucesso'
      })
  }

  return response.status(400).json({
      erro: true,
      mensagem: 'Upload não realizado com sucesso'
  })
}),


routes.get("/test", authMiddle, (req, res) => {
    res.send('Very secret number 10!');
  })


module.exports = routes;