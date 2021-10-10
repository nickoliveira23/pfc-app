const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {
    async index(request, response) {
        const users = await connection('user').select('*');

        return response.json(users);
    },

    async indexAll(request, response) {
        const users = await connection('user')
            .join('profile', 'id_user', '=', 'user.id')
            .select([
                'user.*',
                'profile.name',
                'profile.gender',
                'profile.city',
                'profile.uf',
                'profile.goal',
                'profile.biography']);

        return response.json(users);
    },

    async create(request, response) {
        try {
            const { email, password } = request.body;
        
            const hash = await bcrypt.hash(password, 10);
       
            
            const [id] = await connection('user').insert({
            email: email,
            password: hash,
            });

            
            const token = jwt.sign({email: email}, 'superSecretThing');
            return response.json({ id, token: token });
        } catch (err){
            console.log(err);
            return response.status(500).send('Algo deu errado!');
        }
    }   
};