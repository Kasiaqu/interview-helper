import { useEffect, useState } from "react";
import { CandidateCounter } from "../../components/CandidateCounter/CandidateCounter";
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
        return <CandidateCounter key={candidate.id} candidate={candidate} />;
      })}
    </div>
  );
};
