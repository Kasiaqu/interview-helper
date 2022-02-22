import { useEffect, useState } from "react";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions }) => {
  const [answers, setAnswers] = useState([]);
  const toggleAnswer = (button, name, technology) => {
    const newAnswers = answers.filter((answer) => answer.name !== name);
    setAnswers(newAnswers);
    return setAnswers((prevValue) => [
      ...prevValue,
      { button, name, technology },
    ]);
  };

  useEffect(() => console.log(answers), [toggleAnswer]);
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <div key={question.name}>
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
          </div>
        ))}
      </div>
    </div>
  );
};
