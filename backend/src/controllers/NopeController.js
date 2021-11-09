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
                    return response.status(404).json({ error: 'Tentativa de Nope com o mesmo usuário logado!' })
                } else {
                    const nope = await connection('nope')
                        .where({
                            logged: id,
                            target: id_user.id
                        })
                        .select('*')
                        .first();
                    if (nope) {
                        return response.status(400).json({ error: 'Não é possível dar nope mais de uma vez na mesma pessoa!' })
                    } else {
                        const nope = await connection('nope')
                            .insert({
                                logged: id,
                                target: id_user.id
                            })

                        return response.json('Nope realizado com sucesso')
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    },
    async index(request, response) {
        const nopes = await connection('nope').select('*');

        return response.json(nopes);
    }
};