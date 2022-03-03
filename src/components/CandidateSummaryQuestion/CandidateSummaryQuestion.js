import { AnswerButton } from "../AnswerButton/AnswerButtton";
import s from "./CandidateSummaryQuestion.module.css";

export const CandidateSummaryQuestion = ({
  question,
  index,
  toggleAnswer,
  answers,
}) => {
  return (
    <div key={question.name} className={s.candidateSummaryQuestion}>
      <h2>
        {index + 1}. {question.name} ({question.time} min.)
      </h2>
      <p>{question.answer}</p>
      <div className={s.buttonCounter}>
        <AnswerButton
          question={question}
          toggleAnswer={toggleAnswer}
          title="Bad answer"
          name="Bad"
          answers={answers}
        />
        <AnswerButton
          question={question}
          toggleAnswer={toggleAnswer}
          title="Not fully understand this question"
          name="Not understand"
          answers={answers}
        />
        <AnswerButton
          question={question}
          toggleAnswer={toggleAnswer}
          title="Good answer"
          name="Good"
          answers={answers}
        />
        <AnswerButton
          question={question}
          toggleAnswer={toggleAnswer}
          title="Very good answer"
          name="Very good"
          answers={answers}
        />
      </div>
    </div>
  );
};
