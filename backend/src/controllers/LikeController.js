const connection = require('../database/connection');

module.exports = {
    async store(request, response) {
        try {
            const { user } = request.headers;
            const { userId } = request.params;

            const { id } = await connection('profile')
                .where('id', user)
                .select('*')
                .first()

            const id_user = await connection('profile')
                .where('id', userId)
                .select('*')
                .first()

            if (!id_user) {
                return response.status(404).json({ error: 'Nenhum usuário encontrado!' })
            } else {
                if (id_user.id == 1) {
                    return response.status(404).json({ error: 'Nenhum usuário encontrado!' })
                } else {
                    const like = await connection('like')
                        .insert({
                            logged: id,
                            target: id_user.id
                        })

                    const verifyMatch = await connection('like')
                        .where({
                            logged: id_user,
                            target: id
                        })
                        .select('*')
                        .first()

                    if (verifyMatch) {
                        return response.json('OPA, É UM MATCH')
                    }
                    return response.json('like realizado com sucesso')
                }
            }
        } catch (err) {
            console.log(err)
        }
        // const like = await connection('like').select('*')
        // return response.json(like)
    }
};