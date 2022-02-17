import { BrowserRouter, Route, useNavigate } from "react-router-dom";
import { CandidateInfo } from "../CandidateInfo/CandidateInfo";
import s from "./CandidateCounter.module.css";
export const CandidateCounter = ({ candidate }) => {
  console.log(candidate);
  const navigate = useNavigate();
  const displayInfo = () => {
    navigate(`user/${candidate.id}`);
  };
  return (
    <div className={s.candidateCounter}>
      <div>
        <p>
          {candidate.name} {candidate.lastName}
        </p>
      </div>
      <div>
        {" "}
        <p>{candidate.skills.map((skill) => skill + ", ")}</p>
      </div>

      <button onClick={() => displayInfo()}>See more information</button>
    </div>
  );
};
