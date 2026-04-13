import React from 'react';
const QuestionCard = ({ index, qa, questions, hideAnswers, onChange, error }) => {
  return (
    <div className="question-block">
      <label className="question-label">Question {index + 1}</label>
      <select
        className="form-select"
        value={qa.question}
        onChange={(e) => onChange(index, 'question', e.target.value)}>
        <option value="">Choose</option>
        {questions.map((q) => (
          <option key={q.q_id || q.question} value={q.question}>
            {q.question}
          </option>
        ))}
      </select>
      <div className="input-row">
        <input
          className={`form-input ${error ? "input-error" : ""}`}
          type={hideAnswers ? "password" : "text"}
          placeholder="Answer"
          value={qa.answer}
          onChange={(e) => onChange(index, 'answer', e.target.value)}/>
        <input
          className={`form-input ${error ? "input-error" : ""}`}
          type={hideAnswers ? "password" : "text"}
          placeholder="Confirm"
          value={qa.confirmAnswer}
          onChange={(e) => onChange(index, 'confirmAnswer', e.target.value)}/>
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
export default QuestionCard;