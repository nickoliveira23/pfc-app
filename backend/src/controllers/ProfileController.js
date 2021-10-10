const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, gender, city, 
            uf, goal, biography, id_user } = request.body;

            const [id] = await connection('profile').insert({
                name, 
                gender, 
                city, 
                uf, 
                goal, 
                biography, 
                id_user,
            });

            return response.json({ id });
    },

    async index(request, response) {
            const profile = await connection('profile').select('*');

            return response.json(profile);
    }
};