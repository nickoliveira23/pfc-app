const multer = require('multer');
//const teste = require('../public/upload/profiles')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, './src/public/upload/profiles')
        },
        filename: (request, file, callback) => {
            callback(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    fileFilter: (request, file, callback) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg', 'image/heic'].find
        (formatoAceito => formatoAceito == file.mimetype);

        if (extensaoImg) {
            return callback(null, true);
        }
        return callback(null, false);

    }
})); 