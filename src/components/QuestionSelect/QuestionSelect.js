import { useEffect, useState } from "react";

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
