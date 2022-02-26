import { useNavigate } from "react-router-dom";
import s from "./ButtonCandidatesList.module.css";
export const ButtonCandidatesList = () => {
  const navigate = useNavigate();
  return (
    <button className={s.button} onClick={() => navigate("/panel")}>
      Go to candidates list
    </button>
  );
};
