import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions }) => {
  console.log(selectedQuestions);
  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <label key={question.name}>
            <h3>
              {index + 1}. {question.name}
            </h3>
            <p>{question.answer}</p>
            <button>Bad answer</button>
            <button>Not fully understand this question</button>
            <button>Good answer</button>
            <button>Very good answer</button>
          </label>
        ))}
      </div>
    </div>
  );
};
