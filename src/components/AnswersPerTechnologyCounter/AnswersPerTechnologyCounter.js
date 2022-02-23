export const AnswersPerTechnologyCounter = ({ technology }) => {
  return (
    <div>
      {technology[0].technology}
      {technology.map((technologyId) => (
        <p key={technology.name}>{technologyId.name}</p>
      ))}
    </div>
  );
};
