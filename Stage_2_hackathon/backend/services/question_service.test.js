const questionService = require('../services/question_service');
const fs = require('fs');

// Mock the file system
jest.mock('fs');

describe('Question Service', () => {
  it('should return an array when JSON is valid', () => {
    const mockData = JSON.stringify([{ q_id: 1, question: "Test?" }]);
    fs.readFileSync.mockReturnValue(mockData);

    const result = questionService.readFile('fake-path.json');
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].question).toBe("Test?");
  });

  it('should return an empty array if file reading fails', () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error('File not found');
    });

    const result = questionService.readFile('bad-path.json');
    expect(result).toEqual([]);
  });
});