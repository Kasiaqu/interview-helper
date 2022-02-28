import { useEffect } from "react";
import s from "./CandidateSummaryQuestion.module.css";

export const CandidateSummaryQuestion = ({
  question,
  index,
  toggleAnswer,
  answers,
}) => {
  const changeColor = (question, title) => {
    return answers
      .filter((answer) => answer.name === question)
      .map((answer) => (answer.button === title ? s.buttonChecked : null));
  };
  useEffect(() => changeColor(), [toggleAnswer]);

  return (
    <div key={question.name} className={s.questionCounter}>
      <h3>
        {index + 1}. {question.name}
      </h3>
      <p>{question.answer}</p>
      <div className={s.buttonCounter}>
        <button
          className={changeColor(question.name, "Bad")}
          onClick={() =>
            toggleAnswer("Bad", question.name, question.technology)
          }
        >
          Bad answer
        </button>
        <button
          className={changeColor(question.name, "Not understand")}
          onClick={() =>
            toggleAnswer("Not understand", question.name, question.technology)
          }
        >
          Not fully understand this question
        </button>
        <button
          className={changeColor(question.name, "Good")}
          onClick={() =>
            toggleAnswer("Good", question.name, question.technology)
          }
        >
          Good answer
        </button>
        <button
          className={changeColor(question.name, "Very good")}
          onClick={() =>
            toggleAnswer("Very good", question.name, question.technology)
          }
        >
          Very good answer
        </button>
      </div>
    </div>
  );
};
