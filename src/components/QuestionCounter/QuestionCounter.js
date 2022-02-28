import { QuestionSelect } from "../QuestionSelect/QuestionSelect";
import s from "./QuestionCounter.module.css";
export const QuestionCounter = ({ technology, toggleQuestion }) => {
  return (
    <>
      <h3>{technology.id}</h3>
      <div className={s.questions}>
        {technology.questions.map((question) => (
          <QuestionSelect
            key={question.name}
            question={question}
            technology={technology}
            toggleQuestion={toggleQuestion}
          />
        ))}
      </div>
    </>
  );
};
