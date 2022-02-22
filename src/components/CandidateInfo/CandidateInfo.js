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

  useEffect(
    () => console.log(selectedQuestions),
    [selectedCategories, selectedQuestions]
  );
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
              <div>
                Skills:{" "}
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
            <div>
              How technologies do you want to ask the candidate about? Please
              select below:
              {skills.map((technology) => (
                <TechnologySelect
                  key={technology}
                  technology={technology}
                  toggleQuestion={toggleQuestion}
                  setSelectedCategories={setSelectedCategories}
                />
              ))}
              <button onClick={() => setDisplayQuestions(true)}>
                {" "}
                Display questions
              </button>
            </div>
          )}

          {displayQuestions && (
            <div>
              How questions do you want to ask the candidate about?
              {getQuestionsPerCategory()?.map((technology) => (
                <QuestionCounter
                  key={technology.id}
                  technology={technology}
                  toggleQuestion={toggleQuestion}
                  setSelectedQuestions={setSelectedQuestions}
                />
              ))}
              <button onClick={() => navigate("summary")}>Summary</button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
