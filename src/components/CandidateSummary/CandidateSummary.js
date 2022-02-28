import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedQuestionsContext } from "../../contexts/SelectedQuestionsContext";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import { CandidateSummaryQuestion } from "../CandidateSummaryQuestion/CandidateSummaryQuestion";
import s from "./CandidateSummary.module.css";
export const CandidateSummary = ({ toggleAnswer, answers }) => {
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
        <button onClick={() => navigate("finish")}>Finish the interview</button>
      </div>
      <ButtonCandidatesList />
    </div>
  );
};
