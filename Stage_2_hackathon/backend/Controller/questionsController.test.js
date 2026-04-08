const request = require('supertest');
describe('Question Controller Unit Tests', () => {
  const baseURL = "http://localhost:3001";
  it('should return 200 and the list of questions', async () => {
    const res = await request(baseURL).get('/questions'); 
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); 
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('question');
    }
  });
});