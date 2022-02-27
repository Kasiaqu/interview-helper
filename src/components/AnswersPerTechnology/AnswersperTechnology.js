export const AnswersPerTechnology = ({ title, answers, technology }) => {
  const technologyAnswers = answers
    .filter((answer) => answer.technology === technology[0].technology)
    .map((answer) => <p key={answer.name}>{answer.name}</p>);

  return (
    <>
      <h3>
        {title}: {technologyAnswers.length}
      </h3>
      {technologyAnswers}
    </>
  );
};
