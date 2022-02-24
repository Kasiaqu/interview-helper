import { AnswersPerTechnologyCounter } from "../AnswersPerTechnologyCounter/AnswersPerTechnologyCounter";
import s from "./CandidateFinish.module.css";
export const CandidateFinish = ({
  answers,
  badAnswers,
  notUnderstandAnswers,
  goodAnswers,
  veryGoodAnswers,
  getAnswersPerResult,
  getTechnologies,
}) => {
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        <h2>Amount of answers: {answers.length}</h2>

        <div className={s.summary}>
          <div className={s.answersCounter}>
            <h2>Answers per results</h2>
            <h3>Bad answers: {badAnswers.length}</h3>
            {getAnswersPerResult(badAnswers)}
            <h3>Not fully understand answers: {notUnderstandAnswers.length}</h3>
            {getAnswersPerResult(notUnderstandAnswers)}
            <h3>Good answers: {goodAnswers.length}</h3>
            {getAnswersPerResult(goodAnswers)}
            <h3>Very good answers: {veryGoodAnswers.length}</h3>
            {getAnswersPerResult(veryGoodAnswers)}
          </div>
          <div className={s.answersCounter}>
            <h2>Answers per technology:</h2>
            {getTechnologies().map((technology, index) => (
              <AnswersPerTechnologyCounter
                key={index}
                technology={technology}
                badAnswers={badAnswers}
                notUnderstandAnswers={notUnderstandAnswers}
                goodAnswers={goodAnswers}
                veryGoodAnswers={veryGoodAnswers}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
