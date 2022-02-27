import { AnswersPerTechnologyCounter } from "../AnswersPerTechnologyCounter/AnswersPerTechnologyCounter";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import { getAnswersPerResult } from "../../utils/functions";
import s from "./CandidateFinish.module.css";
import { AnswersPerResult } from "../AnswersPerResult/AnswerPerResult";
export const CandidateFinish = ({
  answers,
  badAnswers,
  notUnderstandAnswers,
  goodAnswers,
  veryGoodAnswers,
  getTechnologies,
}) => {
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        <h2>Amount of answers: {answers.length}</h2>

        <div className={s.summary}>
          <div className={s.answersCounter}>
            <h2>Answers per results</h2>
            <AnswersPerResult title="Bad answers" answers={badAnswers} />
            <AnswersPerResult
              title="Not fully understand answers"
              answers={notUnderstandAnswers}
            />
            <AnswersPerResult title="Good answers" answers={goodAnswers} />
            <AnswersPerResult
              title="Very Good Answers"
              answers={veryGoodAnswers}
            />
            {/* <h3>Bad answers: {badAnswers.length}</h3>
            {getAnswersPerResult(badAnswers)}
            <h3>Not fully understand answers: {notUnderstandAnswers.length}</h3>
            {getAnswersPerResult(notUnderstandAnswers)}
            <h3>Good answers: {goodAnswers.length}</h3>
            {getAnswersPerResult(goodAnswers)}
            <h3>veryGoodAnswers: {veryGoodAnswers.length}</h3>
            {getAnswersPerResult(veryGoodAnswers)} */}
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
      <ButtonCandidatesList />
    </div>
  );
};
