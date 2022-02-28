import { AnswersPerTechnologyCounter } from "../AnswersPerTechnologyCounter/AnswersPerTechnologyCounter";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import s from "./CandidateFinish.module.css";
import { AnswersPerResult } from "../AnswersPerResult/AnswersPerResult";
export const CandidateFinish = ({
  answers,
  badAnswers,
  notUnderstandAnswers,
  goodAnswers,
  veryGoodAnswers,
  getTechnologies,
}) => {
  const sortingAnswers = () => {
    const sortedArray = [
      [badAnswers, { title: "Bad answers" }],
      [notUnderstandAnswers, { title: "Not fully understand answers" }],
      [goodAnswers, { title: "Good answers" }],
      [veryGoodAnswers, { title: "Very good answers" }],
    ];
    return sortedArray.sort((n1, n2) => n2[0].length - n1[0].length);
  };
  sortingAnswers();
  console.log(sortingAnswers());
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        <h2>Amount of answers: {answers.length}</h2>

        <div className={s.summary}>
          <div className={s.answersCounter}>
            <h2>Answers per results</h2>

            {sortingAnswers().map((answers) => (
              <AnswersPerResult
                key={answers[1].title}
                title={answers[1].title}
                answers={answers[0]}
              />
            ))}
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
