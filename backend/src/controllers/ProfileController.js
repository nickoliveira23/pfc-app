const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const { user } = request.headers;

            const { goal } = await connection('profile')
                .where('id', user)
                .select('goal')
                .first()

            const targetLike = await connection('like')
                .where('logged', user)
                .select('target')

            const elementLike = []

            for (let i = 0; i < targetLike.length; ++i) {
                elementLike[i] = targetLike[i].target;
            }

            const targetNope = await connection('Nope')
                .where('logged', user)
                .select('target')

            const elementNope = []

            for (let i = 0; i < targetNope.length; ++i) {
                elementNope[i] = targetNope[i].target;
            }

            if (goal == "Ambos") {
                const profile = await connection('profile')
                    .whereNot('id_user', user)
                    .whereNotIn('id_user', elementLike)
                    .whereNotIn('id_user', elementNope)
                    .select('*');

                return response.json(profile);
            }

            if (goal == "Mulheres") {
                const profile = await connection('profile')
                    .where('gender', "Feminino")
                    .whereNot('id_user', user)
                    .whereNotIn('id_user', elementLike)
                    .whereNotIn('id_user', elementNope)
                    .select('*');

                return response.json(profile);
            }

            if (goal == "Homens") {
                const profile = await connection('profile')
                    .where('gender', "Masculino")
                    .whereNot('id_user', user)
                    .whereNotIn('id_user', elementLike)
                    .whereNotIn('id_user', elementNope)
                    .select('*');

                return response.json(profile);
            }

        } catch (error) {
            console.log(error)
            return response.json({ error: 'Falha ao exibir usuários!' });
        }
    },

    async listMatch(request, response) {
        try {
            const { user } = request.headers;

            const targetLike = await connection('like')
                .where('logged', user)
                .select('target');

            const elementLike = []

            for (let i = 0; i < targetLike.length; ++i) {
                elementLike[i] = targetLike[i].target;
            }

            const match = await connection('like')
                .join('profile', 'logged', '=', 'profile.id')
                .whereIn('logged', elementLike)
                .where('target', user)
                .select([
                    'profile.*',
                ]);

            return response.json(match)
        } catch (err) {
            console.log(err)
        }
    },

    async indexById(request, response) {
        try {
            const { id } = request.params;

            const profile = await connection('profile')
                .where('id_user', id)
                .select('*')
                .first();

            return response.json(profile)
        } catch (err) {
            console.log(err)
        }

    },

    async create(request, response) {
        try {
            const { name, whatsapp, age, gender, city,
                uf, goal, biography, id_user } = request.body;

            const [id] = await connection('profile').insert({
                name,
                whatsapp,
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
            const {
                name,
                whatsapp,
                age,
                gender,
                biography,
                goal,
                city,
                uf
            } = request.body;

            const { id } = request.params;

            const { id_user } = request.params;

            const profile = await connection('profile')
                .update({
                    name,
                    whatsapp,
                    age,
                    gender,
                    biography,
                    goal,
                    city,
                    uf,
                    id_user
                })
                .where({ id })

            return response.json(profile);

        } catch (err) {
            return response.status(500).json({ error: 'Erro ao atualizar informações de perfil!' });
        }
    },

    async validate(request, response) {
        try {
            const {
                name,
                whatsapp,
                age,
                gender,
                biography,
                goal,
                city,
                uf
            } = request.body;

            if (name !== "") {
                if (whatsapp.length == 11) {
                    if (age < 80 && age > 17) {
                        if (gender !== "") {
                            if (biography.length < 151) {
                                if (goal !== "") {
                                    if (uf.length == 2 || uf == "") {
                                        return response.json({ message: "Atualizado com sucesso!"});
                                    } else {
                                        return response.status(400).json({ error: 'UF só pode conter 2 dígitos!' })
                                    }
                                } else {
                                    return response.status(400).json({ error: 'Preencha o campo "Mostrar"!' });
                                }
                            } else {
                                return response.status(400).json({ error: 'Biografia não pode ter mais do que 150 caracteres!' })
                            }
                        } else {
                            return response.status(400).json({ error: 'Selecione um gênero!' });
                        }
                    } else {
                        return response.status(400).json({ error: 'Idade não está de acordo com os termos de uso do aplicativo!' });
                    }
                } else {
                    return response.status(400).json({ error: 'Número de telefone inválido!' });
                }
            } else {
                return response.status(400).json({ error: 'Digite um nome!' });
            }
        } catch (err) {
            return response.status(500).json({ error: 'Algo deu errado!' });
        }
    }
};