
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('user').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { fone, email, birth } = request.body;

        const [id] = await connection('user').insert({
            fone,
            email,
            birth,
        });

        

        return response.json({ id });
    }
};