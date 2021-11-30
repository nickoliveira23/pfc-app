const connection = require('../database/connection');
const fs = require('fs');


module.exports = {
    async showPicture(request, response) {
        try {
            const { id } = request.params;

            const picture = await connection('picture')
                .where('id_profile', id)
                .select('*')
                .first();

            if (picture) {
                const filename = picture.filename;
                const filepath = picture.destination;

                return response.sendFile(filename, { root: filepath });
            } else {
                return response.status(404).json({ mensagem: 'Imagem não encontrada!' })
            }
        } catch (err) {
            console.log(err)
        }
    },

    async uploadPicture(request, response) {
        try {
            if (request.file) {

                const { fieldname, originalname, encoding, mimetype, destination,
                    filename, path, size } = request.file;

                const { id_profile } = request.params;


                const [id] = await connection('picture').insert({
                    fieldname,
                    originalname,
                    encoding,
                    mimetype,
                    destination,
                    filename,
                    path,
                    size,
                    id_profile
                })

                return response.status(200).json({
                    message: 'Upload realizado com sucesso',
                    id
                })
            }
            return response.status(400).json({
                error: 'Upload não realizado!'
            });
        } catch (err) {
            console.log(err);
        }

    },

    async updatePicture(request, response) {
        try {
            if (request.file) {

                const { fieldname, originalname, encoding, mimetype, destination,
                    filename, path, size } = request.file;

                const { id_profile } = request.params;

                const caminho = await connection('picture')
                    .where('id_profile', id_profile)
                    .first();

                fs.unlink(caminho.path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })

                await connection('picture')
                    .update({
                        fieldname,
                        originalname,
                        encoding,
                        mimetype,
                        destination,
                        filename,
                        path,
                        size,
                        id_profile
                    })
                    .where({ id_profile })

                return response.status(200).json({
                    erro: false,
                    message: 'Upload realizado com sucesso',
                })
                console.log('ok')
            }
            return response.status(400).json({
                erro: true,
                message: 'Upload não realizado com sucesso'
            });
        } catch (err) {
            console.log(err);
        }
    },
};