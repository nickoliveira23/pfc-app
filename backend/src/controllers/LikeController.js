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
                        return response.json({ message: 'like realizado com sucesso' })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    },

    async cancelMatch(request, response) {

        try {
            const { logged } = request.headers;
            const { target } = request.params;

            await connection('like')
                .where({
                    logged: logged,
                    target: target
                })
                .delete()

            return response.json('Match cancelado com sucesso!')
        } catch (error) {
            console.log(error)
        }
    }
};