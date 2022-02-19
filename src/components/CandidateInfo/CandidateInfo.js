import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../utils/db";
import { QuestionSelect } from "../QuestionSelect/QuestionSelect";
import { TechnologySelect } from "../TechnologySelect/TechnologySelect";
import s from "./CandidateInfo.module.css";
export const CandidateInfo = ({ candidates }) => {
  console.log(candidates);
  const [skills, setSkills] = useState([]);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const candidateId = useParams().candidateId;
  const displayingSkills = (skills) => {
    setSkills(skills);
    setDisplaySkills(true);
  };

  const toggleCategory = (name, checked) => {
    setSelectedCategories((categories) =>
      !checked ? categories.filter((x) => x !== name) : [...categories, name]
    );
  };
  useEffect(() => getQuestions(setQuestionsList), []);
  console.log(questionsList);

  useEffect(() => {
    getQuestionsPerCategory();
  }, [toggleCategory]);

  const getQuestionsPerCategory = () => {
    const questionsPerCategory = selectedCategories.map((category) =>
      questionsList.find((technology) => category === technology.id)
    );
    return questionsPerCategory;
  };
  const toggleQuestion = (name, checked) => {
    setSelectedQuestions((questions) =>
      !checked ? questions.filter((x) => x !== name) : [...questions, name]
    );
  };

  useEffect(() => console.log(selectedQuestions), [selectedQuestions]);
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
          How technologies do you want to ask the candidate about? Please select
          below:
          {skills.map((technology, index) => (
            <TechnologySelect
              key={index}
              technology={technology}
              toggleCategory={toggleCategory}
            />
          ))}
          <div></div>
          How questions do you want to ask the candidate about?
          {getQuestionsPerCategory()?.map((technology) =>
            technology.questions?.map((question) => (
              <QuestionSelect
                key={question.name}
                question={question}
                toggleQuestion={toggleQuestion}
              />
            ))
          )}
        </div>
      ) : null}
    </div>
  );
};
