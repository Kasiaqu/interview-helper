import s from "./AnswersPerResult.module.css";
export const AnswersPerResult = ({ title, answers }) => {
  return (
    <div className={s.answersPerResult}>
      <h3>
        {title}: {answers.length}
      </h3>
      {answers.map((answer) => (
        <p key={answer.name}>{answer.name}</p>
      ))}
    </div>
  );
};
