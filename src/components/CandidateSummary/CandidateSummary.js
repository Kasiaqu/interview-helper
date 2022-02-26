import { useNavigate } from "react-router-dom";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ selectedQuestions, toggleAnswer }) => {
  const navigate = useNavigate();

  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <div key={question.name} className={s.questionCounter}>
            <h3>
              {index + 1}. {question.name}
            </h3>
            <p>{question.answer}</p>
            <div className={s.buttonCounter}>
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
          </div>
        ))}
        <button onClick={() => navigate("finish")}>Finish the interview</button>
      </div>
      <ButtonCandidatesList />
    </div>
  );
};
