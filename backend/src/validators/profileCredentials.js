const { celebrate, Segments, Joi } = require('celebrate');

exports.profile = [
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string()
                .required(),

            whatsapp: Joi.string()
                .required()
                .min(11)
                .max(11),

            age: Joi.number()
            .required
            .min(2)
            .max(2),

            gender: Joi.string()
            .required(),

            city: Joi.string()
            .required(),

            uf: Joi.string()
            .required()
            .length(2),

            goal: Joi.string()
            .required(),

            biography: Joi.string()
            .required()
            .length(150)
        })
    })
];

exports.email = [
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        }).unknown(),
    }),
];

exports.password = [
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            password: Joi.string()
                .required()
                .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')),
        }).unknown(),
    }),
];