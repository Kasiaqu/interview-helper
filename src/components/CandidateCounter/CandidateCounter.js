import { useNavigate } from "react-router-dom";
import s from "./CandidateCounter.module.css";
export const CandidateCounter = ({ candidate }) => {
  const navigate = useNavigate();
  const displayInfo = () => {
    navigate(`user/${candidate.id}`);
  };
  return (
    <div className={s.candidateCounter}>
      <div className={s.candidateName}>
        <p>
          {candidate.name} {candidate.lastName}
        </p>
      </div>
      <div className={s.candidateSkills}>
        {" "}
        <p>{candidate.skills?.map((skill) => skill).join(", ")}</p>
      </div>

      <button onClick={() => displayInfo()}>See more information</button>
    </div>
  );
};
