import { useParams } from "react-router-dom";
import s from "./CandidateInfo.module.css";
export const CandidateInfo = ({ candidates }) => {
  console.log(candidates);
  const candidateId = useParams().candidateId;
  return (
    <div className={s.candidateInfo}>
      <div className={s.candidateCounter}>
        Informacje o kandydacie
        {candidates.map((candidate) =>
          candidate.id === candidateId ? (
            <div key={candidate.id}>
              <p>
                Imię i nazwisko: {candidate.name + " " + candidate.lastName}
              </p>
              <p>Skills: {candidate.skills}</p>
              <p>Year of birth: {candidate.dateOfBirth}</p>
              <p>Experience: {candidate.bio}</p>
            </div>
          ) : null
        )}
        <button>Start interview</button>
      </div>
    </div>
  );
};
