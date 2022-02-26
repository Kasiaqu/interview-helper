import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCandidatesList } from "../../components/ButtonCandidatesList/ButtonCandidatesList";
import { LabelField } from "../../components/LabelField/LabelField";
import { TechnologySelect } from "../../components/TechnologySelect/TechnologySelect";
import { TextAreaField } from "../../components/TextAreaField/TextAreaField";
import { addCandidate, getCandidates, getQuestions } from "../../utils/db";
import { toggleQuestion } from "../../utils/functions";
import s from "./AddCandidateView.module.css";
export const AddCandidateView = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [hobbies, setHobbies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addCandidate(name, lastName, dateOfBirth, bio, skills, projects, hobbies);
    setName("");
    setLastName("");
    setDateOfBirth("");
    setBio("");
    setSkills([]);
    setHobbies("");
    setProjects("");
    navigate("/panel");
  };

  useEffect(() => getQuestions(setQuestionsList), []);

  return (
    <div className={s.addCandidateView}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h2>Add new candidate</h2>
        <div className={s.infoSection}>
          <div className={s.info}>
            <LabelField
              type="text"
              title="name"
              state={name}
              setState={setName}
            />
            <LabelField
              type="text"
              title="last name"
              state={lastName}
              setState={setLastName}
            />
            <LabelField
              type="number"
              title="date of birth"
              state={dateOfBirth}
              setState={setDateOfBirth}
            />
            <TextAreaField title="bio" state={bio} setState={setBio} />
            <TextAreaField
              title="hobbies"
              state={hobbies}
              setState={setHobbies}
            />
            <TextAreaField
              title="projects"
              state={projects}
              setState={setProjects}
            />
          </div>
          <div className={s.skills}>
            <h3>Select skills:</h3>
            {questionsList.map((technology) => (
              <TechnologySelect
                key={technology.id}
                technology={technology.id}
                toggleQuestion={toggleQuestion}
                setSelectedCategories={setSkills}
              />
            ))}
          </div>
        </div>
        <button type="submit">Add candidate</button>
      </form>
      <ButtonCandidatesList />
    </div>
  );
};
