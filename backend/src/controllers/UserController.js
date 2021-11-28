const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {
    async index(request, response) {
        try {
            const user = await connection('user')
            .select('*');

            return response.json(user)
        } catch (err) {
            console.log(err);
            return response.status(500).send('Algo deu errado!');
        }
    },

    async create(request, response) {
        try {
            const { email, password } = request.body;

            const hash = await bcrypt.hash(password, 10);

            const [id] = await connection('user').insert({
                email: email,
                password: hash,
            });

            const token = jwt.sign({ email: email }, 'superSecretThing');
            return response.json({ id, token: token });

        } catch (err) {
            console.log(err);
            return response.status(500).send('Algo deu errado!');
        }
    },

    async validateEmail(request, response) {
        try {
            const { email } = request.body;

            function validateEmail(email) {
                const caracteresEspeciais = /\S@+\S+\.\S+/;
                return caracteresEspeciais.test(email);
            }

            const user = await connection('user')
                .where({ email: email })
                .select('*')
                .first();

            if (user) {
                return response.status(400).json({ error: 'E-mail já cadastrado!' });
            } else {
                if (email == '') {
                    return response.status(400).json({ error: 'Preencha o e-mail!' });
                } else {
                    if (validateEmail(email)) {
                        return response.json({ email: email })
                    } else {
                        return response.status(400).json({ error: 'Formato de e-mail não é válido' });
                    }
                }
            }
        } catch (err) {
            console.log(err);
            return response.status(500).json({ error: 'Algo deu errado!' });
        }

    },
    async validatePassword(request, response) {
        try {
            const letrasMaiusculas = /[A-Z]/;
            const letrasMinusculas = /[a-z]/;
            const numeros = /[0-9]/;
            const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

            const password = request.body;

            const passwordString = JSON.stringify(password.password).replace(/"/g, '');

            if (passwordString.length > 8 && passwordString.length < 16) {

                var auxMaiuscula = 0;
                var auxMinuscula = 0;
                var auxNumero = 0;
                var auxEspecial = 0;

                for (var i = 0; i < passwordString.length; i++) {
                    if (letrasMaiusculas.test(passwordString[i]))
                        auxMaiuscula++;
                    else if (letrasMinusculas.test(passwordString[i]))
                        auxMinuscula++;
                    else if (numeros.test(passwordString[i]))
                        auxNumero++;
                    else if (caracteresEspeciais.test(passwordString[i]))
                        auxEspecial++;
                }
                if (auxMaiuscula > 0) {
                    if (auxMinuscula > 0) {
                        if (auxNumero > 0) {
                            if (auxEspecial > 0) {
                                return response.json(password)
                            } else {
                                return response.status(400).json({
                                    error:
                                        'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
                                });
                            }
                        } else {
                            return response.status(400).json({
                                error:
                                    'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
                            });
                        }
                    } else {
                        return response.status(400).json({
                            error:
                                'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
                        });
                    }
                } else {
                    return response.status(400).json({
                        error:
                            'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
                    });
                }

            } else {
                return response.status(400).json({
                    error:
                        'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
                });
            }
        } catch (err) {
            console.log(err);
            return response.status(500).json({ error: 'Algo deu errado!' });
        }
    },

    // async redefinicao(request, response) {
    //     try {
    //         const { email } = request.body;

    //         function validateEmail(email) {
    //             const caracteresEspeciais = /\S+@\S+\.\S+/;
    //             return caracteresEspeciais.test(email);
    //         }

    //         const user = await connection('user')
    //             .where({ email: email })
    //             .select('*')
    //             .first();

    //         if (user) {
    //             return response.json({ email: email })
    //         } else {
    //             if (email == '') {
    //                 return response.status(400).json({ error: 'Preencha o e-mail!' });
    //             } else {
    //                 if (validateEmail(email)) {
    //                     return response.status(400).json({ error: 'E-mail não encontrado!' });
    //                 } else {
    //                     return response.status(400).json({ error: 'Formato de e-mail não é válido' });
    //                 }
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         return response.status(500).json({ error: 'Algo deu errado!' });
    //     }
    // },

    // async redefinirSenha(request, response) {
    //     try {
    //         const letrasMaiusculas = /[A-Z]/;
    //         const letrasMinusculas = /[a-z]/;
    //         const numeros = /[0-9]/;
    //         const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    //         const { email, password } = request.body;

    //         if (password.length > 8 && password.length < 16) {

    //             var auxMaiuscula = 0;
    //             var auxMinuscula = 0;
    //             var auxNumero = 0;
    //             var auxEspecial = 0;

    //             for (var i = 0; i < password.length; i++) {
    //                 if (letrasMaiusculas.test(password[i]))
    //                     auxMaiuscula++;
    //                 else if (letrasMinusculas.test(password[i]))
    //                     auxMinuscula++;
    //                 else if (numeros.test(password[i]))
    //                     auxNumero++;
    //                 else if (caracteresEspeciais.test(password[i]))
    //                     auxEspecial++;
    //             }
    //             if (auxMaiuscula > 0) {
    //                 if (auxMinuscula > 0) {
    //                     if (auxNumero > 0) {
    //                         if (auxEspecial > 0) {
    //                             const user = await connection('user')
    //                                 .where('email', email)
    //                                 .select('*')
    //                                 .first();

    //                             const hash = await bcrypt.hash(password, 10);

    //                             await connection('user')
    //                                 .update({
    //                                     password: hash
    //                                 })
    //                                 .where({ email })

    //                             return response.json('Ok!');
    //                         } else {
    //                             return response.status(400).json({
    //                                 error:
    //                                     'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
    //                             });
    //                         }
    //                     } else {
    //                         return response.status(400).json({
    //                             error:
    //                                 'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
    //                         });
    //                     }
    //                 } else {
    //                     return response.status(400).json({
    //                         error:
    //                             'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
    //                     });
    //                 }
    //             } else {
    //                 return response.status(400).json({
    //                     error:
    //                         'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
    //                 });
    //             }

    //         } else {
    //             return response.status(400).json({
    //                 error:
    //                     'A senha precisa ter entre 8 e 16 dígitos, ao menos uma letra maiuscula e minúscula, um caractere especial e um número!'
    //             });
    //         }
    //     } catch (err) {
    //         return response.status(500).json({ error: 'Erro ao redefinir senha!' });
    //     }
    // },
};