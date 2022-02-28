import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../../utils/db";
import { QuestionCounter } from "../QuestionCounter/QuestionCounter";
import { TechnologySelect } from "../TechnologySelect/TechnologySelect";
import { ButtonCandidatesList } from "../ButtonCandidatesList/ButtonCandidatesList";
import { toggleQuestion } from "../../utils/functions";
import s from "./CandidateInfo.module.css";
export const CandidateInfo = ({ candidates, setSelectedQuestions }) => {
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
  // const toggleQuestion = (name, checked, setState) => {
  //   setState((questions) => {
  //     return !checked
  //       ? questions.filter((x) => x !== name)
  //       : [...questions, name];
  //   });
  // };
  useEffect(() => {
    getQuestionsPerCategory();
  }, [toggleQuestion]);

  return (
    <div className={s.candidateInfo}>
      <div className={s.counters}>
        <div className={s.candidateCounter}>
          <h2> Information about candidate</h2>
          {candidates.map((candidate) =>
            candidate.id === candidateId ? (
              <div key={candidate.id} className={s.infoCounter}>
                <div className={s.counter}>
                  <p>Name and last name: </p>
                  <p>{candidate.name + " " + candidate.lastName}</p>
                </div>
                <div className={s.counter}>
                  <p>Skills:</p>
                  <p className={s.array}>
                    {candidate.skills.map((skill) => skill).join(", ")}
                  </p>
                </div>
                <div className={s.counter}>
                  <p>Year of birth: </p>
                  <p>{candidate.dateOfBirth}</p>
                </div>
                <div className={s.counter}>
                  <p>Experience:</p>
                  <p> {candidate.bio}</p>
                </div>
                <div className={s.counter}>
                  <p>Last projects: </p>
                  <p> {candidate.projects}</p>
                </div>
                <div className={s.counter}>
                  <p>Hobbies:</p>
                  <p> {candidate.hobbies}</p>
                </div>
                <button onClick={() => displayingSkills(candidate.skills)}>
                  Start interview
                </button>
              </div>
            ) : null
          )}
        </div>
        {displaySkills ? (
          <div className={s.skillsCounter}>
            {!displayQuestions && (
              <>
                <h2>
                  How technologies do you want to ask the candidate about?
                  Please select below:
                </h2>
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
                <h2>How questions do you want to ask the candidate about?</h2>
                <div className={s.skills}>
                  {getQuestionsPerCategory()?.map((technology) => (
                    <QuestionCounter
                      key={technology.id}
                      technology={technology}
                      toggleQuestion={toggleQuestion}
                    />
                  ))}
                </div>
                <button onClick={() => navigate("summary")}>Summary</button>
              </>
            )}
          </div>
        ) : null}
      </div>
      <ButtonCandidatesList />
    </div>
  );
};
