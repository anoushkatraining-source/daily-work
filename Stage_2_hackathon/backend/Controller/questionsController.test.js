const request = require('supertest');
const app = require('../app');
describe('Question Controller Unit Tests', () => {
  it('should return 200 and the list of questions', async () => {
    const res = await request(app).get('/questions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});