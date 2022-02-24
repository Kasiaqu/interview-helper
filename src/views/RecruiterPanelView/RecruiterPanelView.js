import { useEffect } from "react";
import { CandidateCounter } from "../../components/CandidateCounter/CandidateCounter";
import { getCandidates } from "../../utils/db";
import s from "./RecruiterPanelView.module.css";

export const RecruiterPanelView = ({ candidates, setCandidates }) => {
  useEffect(() => {
    getCandidates(setCandidates);
  }, []);
  return (
    <div className={s.recruiterPanel}>
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
