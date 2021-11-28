const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response) {
        try {
            const { email, password } = request.body;

            const user = await connection('user')
                .where({ email: email })
                .select('*')
                .first();

            if (user) {
                const validPass = await bcrypt.compare(password, user.password);
                if (validPass) {
                    const token = jwt.sign({ email: email }, 'superSecretThing', { expiresIn: 1200 });
                    return response.json({ user, token: token, message: 'Login realizado com sucesso!' });
                } else {
                    if (validPass == '') {
                        return response.status(400).json({ error: 'Digite uma senha!' });
                    } else {
                        return response.status(400).json({ error: 'Senha errada!' });
                    }
                }
            } else {
                return response.status(404).json({ error: 'Nenhum usuário encontrado' });
            }
        } catch (err) {
            console.log(err);
            return response.status(500).json({ error: 'Erro ao fazer login no aplicativo!' });
        }
    }
};