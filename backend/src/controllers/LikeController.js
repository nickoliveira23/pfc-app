const connection = require('../database/connection');

module.exports = {
    async store(request, response) {
        try {
            const { user } = request.body;
            const { userId } = request.params;

            const { id } = await connection('profile')
                .where('id', user)
                .select('*')
                .first()

            const id_user = await connection('profile')
                .where('id', userId)
                .select('*')
                .first()

            console.log(user)
            console.log(userId)

            if (!id_user) {
                return response.status(404).json({ error: 'Nenhum usuário encontrado!' })
            } else {
                if (id_user.id == id) {
                    return response.status(404).json({ error: 'Tentativa de like com o mesmo usuário logado!' })
                } else {
                    const like = await connection('like')
                        .where({
                            logged: id,
                            target: id_user.id
                        })
                        .select('*')
                        .first();
                    if (like) {
                        return response.status(400).json({ error: 'Não é possível dar like mais de uma vez na mesma pessoa!' })
                    } else {
                        const like = await connection('like')
                            .insert({
                                logged: id,
                                target: id_user.id
                            })

                        const verifyMatch = await connection('like')
                            .where({
                                logged: id_user.id,
                                target: id
                            })
                            .select('*')
                            .first()

                        if (verifyMatch) {
                            return response.json({ message: 'OPA, É UM MATCH' })
                        }
                        return response.json('like realizado com sucesso')
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    },

    async index(request, response) {
        const likes = await connection('like').select('*');

        return response.json(likes);
    }
};