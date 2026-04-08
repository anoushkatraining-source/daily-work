const request = require('supertest');
describe('Response Controller Unit Tests', () => {
  const baseURL = "http://localhost:3001";
  it('should successfully save security responses', async () => {
    const testData = {
      responses: [
        { 
          question: "what is your age", 
          answer: "25", 
          confirmAnswer: "25" 
        }
      ]
    };
    const res = await request(baseURL)
      .post('/responses')
      .send(testData);
    expect(res.statusCode).toBe(200);
  });
});