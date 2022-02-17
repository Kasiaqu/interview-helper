import s from "./CandidateCounter.module.css";
export const CandidateCounter = ({ candidate }) => {
  console.log(candidate);
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

      <button>See more information</button>
    </div>
  );
};
