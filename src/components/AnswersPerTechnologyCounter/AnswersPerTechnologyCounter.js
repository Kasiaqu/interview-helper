import { AnswersPerResult } from "../AnswersPerResult/AnswersPerResult";
import s from "./AnswersPerTechnologyCounter.module.css";
export const AnswersPerTechnologyCounter = ({ technology, answers }) => {
  const technologyAnswers = answers.filter(
    (answer) => answer.technology === technology[0].technology
  );
  const sortingAnswers = () => {
    const sortedArray = [
      [
        technologyAnswers.filter((answer) => answer.button === "Bad"),
        { title: "Bad answers" },
      ],
      [
        technologyAnswers.filter(
          (answer) => answer.button === "Not understand"
        ),
        { title: "Not fully understand answers" },
      ],
      [
        technologyAnswers.filter((answer) => answer.button === "Good"),
        { title: "Good answers" },
      ],
      [
        technologyAnswers.filter((answer) => answer.button === "Very good"),
        { title: "Very good answers" },
      ],
    ];
    return sortedArray.sort((n1, n2) => n2[0].length - n1[0].length);
  };
  console.log(technologyAnswers);
  return (
    <div className={s.answersPerTechnologyCounter}>
      <h3>Technology: {technology[0].technology}</h3>

      {sortingAnswers().map((answers) => (
        <AnswersPerResult
          key={answers[1].title}
          title={answers[1].title}
          answers={answers[0]}
        />
      ))}
    </div>
  );
};
