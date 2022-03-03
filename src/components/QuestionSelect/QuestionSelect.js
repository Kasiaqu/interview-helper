import { useContext, useEffect, useState } from "react";
import { selectedQuestionsContext } from "../../contexts/SelectedQuestionsContext";
import s from "./QuestionSelect.module.css";
export const QuestionSelect = ({ question, toggleQuestion }) => {
  const [checked, setChecked] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useContext(
    selectedQuestionsContext
  );
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
      <p>
        {question.name} ({question.time} min.)
      </p>
    </label>
  );
};
