import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../../utils/db";
import { QuestionCounter } from "../QuestionCounter/QuestionCounter";
import { TechnologySelect } from "../TechnologySelect/TechnologySelect";
import s from "./CandidateInfo.module.css";
export const CandidateInfo = ({
  candidates,
  selectedQuestions,
  setSelectedQuestions,
}) => {
  const [skills, setSkills] = useState([]);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [displayQuestions, setDisplayQuestions] = useState(false);
  const candidateId = useParams().candidateId;
  const navigate = useNavigate();
  const displayingSkills = (skills) => {
    setSkills(skills);
    setDisplaySkills(true);
  };
  useEffect(() => getQuestions(setQuestionsList), []);

  const getQuestionsPerCategory = () => {
    const questionsPerCategory = selectedCategories.map((category) =>
      questionsList.find((technology) => category === technology.id)
    );
    return questionsPerCategory;
  };
  const toggleQuestion = (name, checked, setState) => {
    setState((questions) => {
      return !checked
        ? questions.filter((x) => x !== name)
        : [...questions, name];
    });
  };
  useEffect(() => {
    getQuestionsPerCategory();
  }, [toggleQuestion]);

  return (
    <div className={s.candidateInfo}>
      <div className={s.candidateCounter}>
        <h2> Information about candidate</h2>
        {candidates.map((candidate) =>
          candidate.id === candidateId ? (
            <div key={candidate.id}>
              <p>
                Name and last name: {candidate.name + " " + candidate.lastName}
              </p>
              <div>
                <p>Skills:</p>
                {candidate.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
              <p>Year of birth: {candidate.dateOfBirth}</p>
              <p>Experience: {candidate.bio}</p>
              <button onClick={() => displayingSkills(candidate.skills)}>
                Start interview
              </button>{" "}
            </div>
          ) : null
        )}
      </div>
      {displaySkills ? (
        <div className={s.skillsCounter}>
          {!displayQuestions && (
            <>
              How technologies do you want to ask the candidate about? Please
              select below:
              <div className={s.skills}>
                {skills.map((technology) => (
                  <TechnologySelect
                    key={technology}
                    technology={technology}
                    toggleQuestion={toggleQuestion}
                    setSelectedCategories={setSelectedCategories}
                  />
                ))}
              </div>
              <button onClick={() => setDisplayQuestions(true)}>
                {" "}
                Display questions
              </button>
            </>
          )}

          {displayQuestions && (
            <>
              How questions do you want to ask the candidate about?
              <div className={s.skills}>
                {getQuestionsPerCategory()?.map((technology) => (
                  <QuestionCounter
                    key={technology.id}
                    technology={technology}
                    toggleQuestion={toggleQuestion}
                    setSelectedQuestions={setSelectedQuestions}
                  />
                ))}
              </div>
              <button onClick={() => navigate("summary")}>Summary</button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};
