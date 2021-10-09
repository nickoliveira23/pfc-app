const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, gender, interest, 
            goal, biography, height, 
            job, photos, main_photo } = request.body;

            const [id] = await connection('profile').insert({
                namee, 
                gender, 
                interest, 
                goal, 
                biography, 
                height, 
                job, 
                photos, 
                main_photo,
            });

            return response.json({ id });
    }
};