const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const user = await connection('user')
        .where('id', id)
        .select('*')
        .first();

        if (!user) {
            return response.status(400).json({ error: 'No user found with this ID'});
        }
        return response.json(user);
    }
};