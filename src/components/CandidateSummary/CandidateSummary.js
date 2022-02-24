import { useNavigate } from "react-router-dom";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions, toggleAnswer }) => {
  const navigate = useNavigate();

  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <div key={question.name}>
            <h3>
              {index + 1}. {question.name}
            </h3>
            <p>{question.answer}</p>
            <button
              onClick={() =>
                toggleAnswer("Bad", question.name, question.technology)
              }
            >
              Bad answer
            </button>
            <button
              onClick={() =>
                toggleAnswer(
                  "Not understand",
                  question.name,
                  question.technology
                )
              }
            >
              Not fully understand this question
            </button>
            <button
              onClick={() =>
                toggleAnswer("Good", question.name, question.technology)
              }
            >
              Good answer
            </button>
            <button
              onClick={() =>
                toggleAnswer("Very good", question.name, question.technology)
              }
            >
              Very good answer
            </button>
          </div>
        ))}
        <button onClick={() => navigate("finish")}>Finish the interview</button>
      </div>
    </div>
  );
};
