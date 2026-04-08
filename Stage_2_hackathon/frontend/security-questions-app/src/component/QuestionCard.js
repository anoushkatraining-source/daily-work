import React from 'react';
const QuestionCard = ({ index, qa, questions, hideAnswers, onChange }) => {
  const isMismatch = qa.confirmAnswer && qa.answer !== qa.confirmAnswer;
  return (
    <div className="card-item" style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
      <label>Question {index + 1}</label>
      <select
        value={qa.question}
        onChange={(e) => onChange(index, 'question', e.target.value)}
        style={{ display: 'block', width: '100%', margin: '10px 0' }}
      >
        <option value="">Choose</option>
        {questions && questions.length > 0 ? (
          questions.map((q) => (
            <option key={q.q_id || q.question} value={q.question}>
              {q.question}
            </option>
          ))
        ) : (
          <option disabled>No questions found</option>
        )}
      </select>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type={hideAnswers ? "password" : "text"}
          placeholder="Answer"
          value={qa.answer}
          onChange={(e) => onChange(index, 'answer', e.target.value)}
        />
        <input
          type={hideAnswers ? "password" : "text"}
          placeholder="Confirm"
          value={qa.confirmAnswer}
          onChange={(e) => onChange(index, 'confirmAnswer', e.target.value)}
        />
      </div>
      {isMismatch && <span style={{ color: 'red' }}>Mismatch</span>}
    </div>
  );
};
export default QuestionCard;