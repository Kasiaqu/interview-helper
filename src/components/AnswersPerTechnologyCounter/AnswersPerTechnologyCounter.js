import { AnswersPerTechnology } from "../AnswersPerTechnology/AnswersPerTechnology";
import s from "./AnswersPerTechnologyCounter.module.css";
export const AnswersPerTechnologyCounter = ({
  technology,
  badAnswers,
  notUnderstandAnswers,
  goodAnswers,
  veryGoodAnswers,
}) => {
  return (
    <div className={s.answersPerTechnologyCounter}>
      <h3>Technology: {technology[0].technology}</h3>
      <AnswersPerTechnology
        title="Bad answers"
        answers={badAnswers}
        technology={technology}
      />
      <AnswersPerTechnology
        title="Not fully understand answers"
        answers={notUnderstandAnswers}
        technology={technology}
      />
      <AnswersPerTechnology
        title="Good answers"
        answers={goodAnswers}
        technology={technology}
      />
      <AnswersPerTechnology
        title="Very Good Answers"
        answers={veryGoodAnswers}
        technology={technology}
      />
    </div>
  );
};
