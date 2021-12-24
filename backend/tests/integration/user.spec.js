const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('user', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new user', async () => {
        const response = await request(app)
            .post('/user/register')
            .send({
                email: 'teste@gmail.com',
                password: '123Teste456!'
            });
        expect(response.body).toHaveProperty('id');
        console.log(response.body);
    });

    it('should be able to validate an user email', async () => {
        const response = await request(app)
            .post('/user/email')
            .send({
                email: 'teste@gmail.com',
            });
        expect(response.body).toHaveProperty('email');
        console.log(response.body);
    });
});