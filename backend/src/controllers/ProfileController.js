const { where } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async showPic(request, response) {
        try {
            const { id } = request.params;

            const picture = await connection('picture')
            .where('id_profile', id)
            .select('*')
            .first();

            if (picture) {
                const filename = picture.filename;
                const filepath = picture.destination;

                return response.sendFile(filename, { root: filepath});
            } else {
                return response.status(404).json({ mensagem: 'Imagem não encontrada!' })
            }
        } catch (err) {
            console.log(err)
        }
    },

    async uploadPicture (request, response) {
        try {
            if(request.file) {

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
                    erro: false,
                    mensagem: 'Upload realizado com sucesso',
                    id
                    
                })
            }
            return response.status(400).json({
                erro: true,
                mensagem: 'Upload não realizado com sucesso'
            });
        } catch(err) {
            console.log(err);
        }
        
    },

    async index(request, response) {
        const profile = await connection('profile')
                .join('picture', 'id_profile', '=', 'profile.id')
                .select([
                    'profile.*',
                    'picture.filename',
                    'picture.destination']);

        return response.json(profile);
    },

    async indexById(request, response) {
        try {
            const { id } = request.params;

            // const profile = await connection('profile')
            // .where('id_user', id)
            // .select('*')
            // .first();

            const profile = await connection('profile')
                .where('id_user', id)
                .join('picture', 'id_profile', '=', 'profile.id')
                .select([
                    'profile.*',
                    'picture.filename',
                    'picture.destination']);

            // const picture = await connection('picture')
            //     .where('id_profile', id)
            //     .select('*')
            //     .first();

            // const filename = picture.filename;
            // const filepath = picture.destination;


            
            //return response.json(profile).sendFile(filename, { root: filepath})
            //return response.sendFile(filename, { root: filepath});
            return response.json(profile)
        } catch (err) {
            console.log(err)
        }
        
    },

    async create(request, response) {
        try {
            const { name, age, gender, city, 
                uf, goal, biography, id_user } = request.body;

            const [id] = await connection('profile').insert({
                name, 
                age,
                gender, 
                city, 
                uf, 
                goal, 
                biography, 
                id_user,
            });
                
            return response.json({ id });
                        
        } catch (err) {
            return response.status(500).json({ error: 'Algo deu errado!' });
        }
    },

    async updateProfile(request, response) {
        try {
            const { name, age, gender, city, 
                uf, goal, biography } = request.body;

            const { id } = request.params;

            const { id_user } = request.params;
            
            await connection('profile')
            .update({
                name, 
                age,
                gender, 
                city, 
                uf, 
                goal, 
                biography,
                id_user
            })
            .where({ id })
            
            return response.json('ok');
                        
        } catch (err) {
            return response.status(500).json({ error: 'Algo deu errado!' });
        }
    },

    async verify(request, response) {
        try {
            const { name, age, gender, city, 
                uf, goal, biography } = request.body;

                if (name !== "") {
                    if (gender !== "") {
                        if (goal !== "") {       
                            if (age < 61 && age > 17) {
                                if (uf.length == 2 || uf == "") {
                                    if (biography.length < 151) {
                                        return response.json('Ok!');
                                    } else {
                                        return response.status(400).json({ error: 'Biografia não pode ter mais do que 150 caracteres!' });
                                    }
                                } else {
                                    return response.status(400).json({ error: 'UF só pode conter 2 dígitos!' })
                                }                               
                            } else {
                                return response.status(400).json({ error: 'Idade não está de acordo com os termos de uso do aplicativo!' });
                            }    
                        } else {
                            return response.status(400).json({ error: 'Preencha o campo "Mostrar"!' });
                        }
                    } else {
                        return response.status(400).json({ error: 'Selecione um gênero!' });
                    }
                } else {
                    return response.status(400).json({ error: 'Digite um nome!' });
                }
        } catch (err) {
            return response.status(500).json({ error: 'Algo deu errado!' });
        }
    }
};