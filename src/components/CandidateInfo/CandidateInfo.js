import { useState } from "react";
import { useParams } from "react-router-dom";
import { TechnologySelect } from "../TechnologySelect/TechnologySelect";
import s from "./CandidateInfo.module.css";
export const CandidateInfo = ({ candidates }) => {
  console.log(candidates);
  const [selectTechnologies, setSelectTechnologies] = useState([]);
  const [displaySelectTechnologies, setDisplaySelectTechnologies] =
    useState(false);
  const candidateId = useParams().candidateId;
  const displayTechnologies = (skills) => {
    setSelectTechnologies(skills);
    setDisplaySelectTechnologies(true);
    console.log(selectTechnologies);
  };
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
              <p>
                Skills:{" "}
                {candidate.skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </p>
              <p>Year of birth: {candidate.dateOfBirth}</p>
              <p>Experience: {candidate.bio}</p>
              <button onClick={() => displayTechnologies(candidate.skills)}>
                Start interview
              </button>{" "}
            </div>
          ) : null
        )}
      </div>
      {displaySelectTechnologies ? (
        <div className={s.skillsCounter}>
          How technologies do you want to ask the candidate about? Please select
          below:
          {selectTechnologies.map((technology) => (
            <TechnologySelect key={technology} technology={technology} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
