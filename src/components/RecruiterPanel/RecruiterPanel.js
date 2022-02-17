import s from "./RecruiterPanel.module.css";
export const RecruiterPanel = () => {
  return (
    <div className={s.recruiterPanel}>
      Recruiter Panel
      <button>Add a new candidate</button>
      List of candidates:
    </div>
  );
};
