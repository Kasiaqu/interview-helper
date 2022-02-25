import { useEffect, useState } from "react";
import s from "./QuestionSelect.module.css";
export const QuestionSelect = ({
  question,
  toggleQuestion,
  setSelectedQuestions,
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    toggleQuestion(question, checked, setSelectedQuestions);
  }, [checked]);
  return (
    <label className={s.label}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={s.input}
      />
      <p>{question.name}</p>
    </label>
  );
};
