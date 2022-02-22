import { useEffect, useState } from "react";

export const QuestionSelect = ({
  question,
  technology,
  toggleQuestion,
  setSelectedQuestions,
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    toggleQuestion(question, checked, setSelectedQuestions);
  }, [checked]);
  console.log(technology);
  return (
    <label key={technology.id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {question.name}
    </label>
  );
};
