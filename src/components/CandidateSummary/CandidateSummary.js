import { useEffect, useState } from "react";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions }) => {
  const [answers, setAnsers] = useState([]);
  const toggleAnswer = (button, name, technology) => {
    setAnsers((prevValue) => [...prevValue, { button, name, technology }]);
    console.log(answers);
  };
  console.log(selectedQuestions);
  useEffect(() => console.log(answers), [toggleAnswer]);
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <label key={question.name}>
            <h3>
              {index + 1}. {question.name}
            </h3>
            <p>{question.answer}</p>
            <button
              onClick={() =>
                toggleAnswer("Bad", question.name, question.technology)
              }
            >
              Bad answer
            </button>
            <button
              onClick={() =>
                toggleAnswer(
                  "Not fully understand",
                  question.name,
                  question.technology
                )
              }
            >
              Not fully understand this question
            </button>
            <button
              onClick={() =>
                toggleAnswer("Good", question.name, question.technology)
              }
            >
              Good answer
            </button>
            <button
              onClick={() =>
                toggleAnswer("Very good", question.name, question.technology)
              }
            >
              Very good answer
            </button>
          </label>
        ))}
      </div>
    </div>
  );
};
