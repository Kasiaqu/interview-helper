export const AnswersPerTechnologyCounter = ({
  technology,
  badAnswers,
  notUnderstandAnswers,
  goodAnswers,
  veryGoodAnswers,
}) => {
  const getAnswersPerCategory = (answers) =>
    answers
      .filter((answer) => answer.technology === technology[0].technology)
      .map((answer) => <p key={answer.name}>{answer.name}</p>);

  return (
    <div>
      <h3>Technology: {technology[0].technology}</h3>
      <h3>Bad answers:</h3>
      {getAnswersPerCategory(badAnswers)}
      <h3>Not understand answers:</h3>
      {getAnswersPerCategory(notUnderstandAnswers)}
      <h3>Good answers:</h3>
      {getAnswersPerCategory(goodAnswers)}
      <h3>Very good answers:</h3>
      {getAnswersPerCategory(veryGoodAnswers)}
    </div>
  );
};
