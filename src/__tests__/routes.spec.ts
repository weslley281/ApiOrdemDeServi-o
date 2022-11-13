import request from 'supertest';
import { app } from '../index';

describe('[POST]/users', () => {
  it('It should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Fulano de Tal',
        phone: '(65)99123-4567',
        email: 'fulano@gmail.com',
        admin: false,
        password: '123',
        create_at: '2022-11-13',
      })
      .expect(201);

    expect(response.body).toMatchObject({
      name: 'Fulano de Tal',
      phone: '(65)99123-4567',
      email: 'fulano@gmail.com',
      admin: false,
      password: '123',
      create_at: '2022-11-13',
    });
  });
});
