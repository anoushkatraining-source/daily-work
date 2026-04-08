import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./component/QuestionCard";
import "./App.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [hideAnswers, setHideAnswers] = useState(false);
    const createEmptyForm = () => [
    { question: "", answer: "", confirmAnswer: "" },
    { question: "", answer: "", confirmAnswer: "" },
    { question: "", answer: "", confirmAnswer: "" },
    { question: "", answer: "", confirmAnswer: "" },
    { question: "", answer: "", confirmAnswer: "" }
  ];
  const [qaList, setQaList] = useState(createEmptyForm());
  useEffect(() => {
    axios.get("http://localhost:3001/questions")
      .then((res) => setQuestions(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  const handleUpdate = (index, field, value) => {
    const updated = [...qaList];
    updated[index][field] = value;
    setQaList(updated);
  };
  const getAvailableQuestions = (currentIndex) => {
    const used = qaList
      .filter((_, idx) => idx !== currentIndex)
      .map(item => item.question);
    return questions.filter(q => !used.includes(q.question));
  };

  const handleSubmit = async () => {
    const isComplete = qaList.every(q => q.question && q.answer && q.confirmAnswer);
    const isMatched = qaList.every(q => q.answer === q.confirmAnswer);

    if (!isComplete) return alert("Please fill all 5 sections.");
    if (!isMatched) return alert("Answers do not match.");

    try {
      await axios.post("http://localhost:3001/responses", { responses: qaList });
      alert("Submitted Successfully!");
      
      // THIS CLEARS THE TEXT FIELDS
      setQaList(createEmptyForm());
      
    } catch (err) {
      alert("Error saving data.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Security Setup</h1>
      
      <div className="form-wrapper">
        {qaList.map((qa, i) => (
          <QuestionCard
            key={i}
            index={i}
            qa={qa}
            questions={getAvailableQuestions(i)}
            hideAnswers={hideAnswers} 
            onChange={handleUpdate}
          />
        ))}
        <div className="bottom-controls">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={hideAnswers} 
              onChange={() => setHideAnswers(!hideAnswers)} 
            />
            Hide Answers
          </label>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit All
        </button>
      </div>
    </div>
  );
}
export default App;