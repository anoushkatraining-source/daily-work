const request = require('supertest');
const app = require('../app');
describe('Response Controller Unit Tests', () => {
  it('should successfully save security responses', async () => {
    const res = await request(app)
      .post('/responses')
      .send({
        responses: [
          { question: "q1", answer: "a1" },
          { question: "q2", answer: "a2" },
          { question: "q3", answer: "a3" },
          { question: "q4", answer: "a4" },
          { question: "q5", answer: "a5" }
        ]
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Response saved successfully");
  });
});