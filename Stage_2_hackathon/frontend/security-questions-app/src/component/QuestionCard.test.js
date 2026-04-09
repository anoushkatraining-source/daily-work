import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuestionCard from "./QuestionCard";
test("renders QuestionCard without crashing", () => {
  const mockQuestions = [
    { question: "What is React?" },
    { question: "What is JS?" }
  ];
  const mockQa = {
    question: "",
    answer: "",
    confirmAnswer: ""
  };
  render(
    <QuestionCard
      index={0}
      qa={mockQa}
      questions={mockQuestions}
      hideAnswers={false}
      onChange={() => {}}
      error={null}
    />
  );
  expect(screen.getByText("Question 1")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});