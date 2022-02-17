import { useEffect, useState } from "react";
import { getCandidates } from "../../utils/db";
import s from "./RecruiterPanelView.module.css";

export const RecruiterPanelView = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    getCandidates(setCandidates);
  }, []);
  console.log(candidates);
  return (
    <div className={s.recruiterPanel}>
      Recruiter Panel\
      <div className={s.headerPanel}>
        <p>List of candidates:</p>
        <button>Add a new candidate</button>
      </div>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.id} className={s.candidateCounter}>
            <div>
              <p>
                {candidate.name} {candidate.lastName}
              </p>
            </div>
            <div>
              {" "}
              <p>{candidate.skills.map((skill) => skill + ", ")}</p>
            </div>

            <button>See more information</button>
          </div>
        );
      })}
    </div>
  );
};
