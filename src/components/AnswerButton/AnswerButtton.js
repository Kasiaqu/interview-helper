import { useEffect } from "react";
import s from "../CandidateSummaryQuestion/CandidateSummaryQuestion.module.css";

export const AnswerButton = ({
  question,
  toggleAnswer,
  title,
  name,
  answers,
}) => {
  const changeColor = (question, title) => {
    return answers
      .filter((answer) => answer.name === question)
      .map((answer) => (answer.button === title ? s.buttonChecked : null));
  };
  useEffect(() => {
    changeColor();
  }, [toggleAnswer]);
  return (
    <button
      className={changeColor(question.name, name)}
      onClick={() => toggleAnswer(name, question.name, question.technology)}
    >
      {title}
    </button>
  );
};
