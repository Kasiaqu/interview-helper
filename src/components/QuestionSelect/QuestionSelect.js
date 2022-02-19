import { useEffect, useState } from "react";

export const QuestionSelect = ({ question, toggleQuestion }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    toggleQuestion(question, checked);
  }, [checked]);
  return (
    <label key={question.name}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {question.name} Time: {question.time} minutes
    </label>
  );
};
