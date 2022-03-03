import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { selectedQuestionsContext } from "../../contexts/SelectedQuestionsContext";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import { CandidateSummaryQuestion } from "../CandidateSummaryQuestion/CandidateSummaryQuestion";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ toggleAnswer, answers }) => {
  const [message, setMessage] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useContext(
    selectedQuestionsContext
  );
  const navigate = useNavigate();

  return (
    <div className={s.candidateSummary}>
      <div className={s.summaryCounter}>
        {selectedQuestions.map((question, index) => (
          <CandidateSummaryQuestion
            key={question.name}
            question={question}
            index={index}
            toggleAnswer={toggleAnswer}
            answers={answers}
          />
        ))}
        <p className={s.errorMessage}>{message}</p>
        <button
          onClick={() =>
            answers.length === selectedQuestions.length
              ? navigate("finish")
              : setMessage("Answer all the questions")
          }
        >
          Finish the interview
        </button>
      </div>
      <ButtonCandidatesList />
    </div>
  );
};
