export const AnswersPerResult = ({ title, answers }) => {
  return (
    <div>
      <h3>
        {title} {answers.length}
      </h3>
      {answers.map((answer) => (
        <p key={answer.name}>{answer.name}</p>
      ))}
    </div>
  );
};
