import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./component/QuestionCard";
import "./App.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [hideAnswers, setHideAnswers] = useState(false);
  const [errors, setErrors] = useState([]);
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
    const currentQuestion = updated[index].question;
    if (field === "answer" || field === "confirmAnswer") {
      if (currentQuestion.toLowerCase().includes("age")) {
        if (!/^\d*$/.test(value)) return;
      }
    }
    updated[index][field] = value;
    setQaList(updated);
    const newErrors = [...errors];
    const q = updated[index];
    if (!q.question || q.answer.trim() === "" || q.confirmAnswer.trim() === "") {
      newErrors[index] = "Required";
    } else if (q.question.toLowerCase().includes("age") && !/^\d+$/.test(q.answer.trim())) {
      newErrors[index] = "Only numbers allowed";
    } else if (q.answer.trim() !== q.confirmAnswer.trim()) {
      newErrors[index] = "Mismatch";
    } else {
      newErrors[index] = "";
    }
    setErrors(newErrors);
  };
  const getAvailableQuestions = (currentIndex) => {
    const used = qaList
      .filter((_, idx) => idx !== currentIndex)
      .map(item => item.question);
    return questions.filter(q => !used.includes(q.question));
  };
  const validateForm = () => {
    let valid = true;
    let newErrors = [];
    qaList.forEach((q, i) => {
      if (!q.question || q.answer.trim() === "" || q.confirmAnswer.trim() === "") {
        newErrors[i] = "Required";
        valid = false;
      } else if (q.question.toLowerCase().includes("age") && !/^\d+$/.test(q.answer.trim())) {
        newErrors[i] = "Only numbers allowed";
        valid = false;
      } else if (q.answer.trim() !== q.confirmAnswer.trim()) {
        newErrors[i] = "Mismatch";
        valid = false;
      } else {
        newErrors[i] = "";
      }
    });
    setErrors(newErrors);
    return valid;
  };
  const isFormValid = () => {
    return qaList.every(q =>
      q.question &&
      q.answer.trim()!== "" &&
      q.confirmAnswer.trim() !== "" &&
      (!q.question.toLowerCase().includes("age")||/^\d+$/.test(q.answer.trim())) &&
      q.answer.trim()===q.confirmAnswer.trim()
    );
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      await axios.post("http://localhost:3001/responses", {
        responses: qaList.map(q => ({
          question: q.question,
          answer: q.answer
        }))
      });
alert("Submitted Successfully!");
      setQaList(createEmptyForm());
      setErrors([]);
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Error saving data.");
    }
  };
  return (
    <div className="app-container">
      <h1 className="app-title">Security Form</h1>
      <div className="form-wrapper">
        {qaList.map((qa, i) => (
          <QuestionCard
            key={i}
            index={i}
            qa={qa}
            questions={getAvailableQuestions(i)}
            hideAnswers={hideAnswers}
            onChange={handleUpdate}
            error={errors[i]}
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
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!isFormValid()}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default App;