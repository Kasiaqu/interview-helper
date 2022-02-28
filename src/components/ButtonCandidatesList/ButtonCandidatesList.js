import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedQuestionsContext } from "../../contexts/SelectedQuestionsContext";
import s from "./ButtonCandidatesList.module.css";
export const ButtonCandidatesList = ({ setAnswers }) => {
  const [selectedQuestions, setSelectedQuestions] = useContext(
    selectedQuestionsContext
  );
  const navigate = useNavigate();
  const comeToHomeView = () => {
    setSelectedQuestions([]);
    setAnswers([]);
    navigate("/panel");
  };
  return (
    <button className={s.button} onClick={() => comeToHomeView()}>
      Go to candidates list
    </button>
  );
};
