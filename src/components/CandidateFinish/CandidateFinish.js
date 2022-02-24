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
        <div>
          <p>Amount of answers: {answers.length}</p>
          <h3>Bad answers: {badAnswers.length}</h3>
          {getAnswersPerResult(badAnswers)}
          <h3>Not fully understand answers: {notUnderstandAnswers.length}</h3>
          {getAnswersPerResult(notUnderstandAnswers)}
          <h3>Good answers: {goodAnswers.length}</h3>
          {getAnswersPerResult(goodAnswers)}
          <h3>Very good answers: {veryGoodAnswers.length}</h3>
          {getAnswersPerResult(veryGoodAnswers)}
        </div>
        <div>
          Answers per technology:
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
  );
};
