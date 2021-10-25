const connection = require('../database/connection');


module.exports = {
    

    async index(request, response) {
        const profile = await connection('profile').select('*');

        return response.json(profile);
    },

    async indexById(request, response) {

        const { id } = request.params;

        const profile = await connection('profile')
        .where('id_user', id)
        .select('*')
        .first();

        return response.json(profile);
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