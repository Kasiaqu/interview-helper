export const QuestionSelect = ({ question }) => {
  return (
    <label key={question.name}>
      <input type="checkbox" />
      {question.name} Time: {question.time} minutes
    </label>
  );
};
