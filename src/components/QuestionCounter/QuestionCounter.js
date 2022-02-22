import { QuestionSelect } from "../QuestionSelect/QuestionSelect";

export const QuestionCounter = ({
  technology,
  toggleQuestion,
  setSelectedQuestions,
}) => {
  return (
    <>
      <p>{technology.id}</p>
      {technology.questions.map((question) => (
        <QuestionSelect
          key={question.name}
          question={question}
          technology={technology}
          toggleQuestion={toggleQuestion}
          setSelectedQuestions={setSelectedQuestions}
        />
      ))}{" "}
    </>
  );
};
