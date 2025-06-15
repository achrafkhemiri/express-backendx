// __tests__/tasks.test.js
const request = require('supertest');
const app = require('../app');

describe('API /api/tasks', () => {
  it('GET / should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('POST / should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Tester Jenkins' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Tester Jenkins');
  });
});
