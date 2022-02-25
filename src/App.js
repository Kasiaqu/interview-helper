import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./views/HomeView/HomeView";
import { RegisterOrLoginView } from "./views/RegisterOrLoginView/RegisterOrLoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView/RecruiterPanelView";
import { auth, logoutUser } from "./utils/db";
import s from "./App.module.css";
import { CandidateInfo } from "./components/CandidateInfo/CandidateInfo";
import { CandidateSummary } from "./components/CandidateSummary/CandidateSummary";
import { CandidateFinish } from "./components/CandidateFinish/CandidateFinish";
import { Navbar } from "./components/NavBar/NavBar";
import logo from "./images/pngwing.png";
function App() {
  const [isRegistered, setIsRegistered] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [badAnswers, setBadAnswers] = useState([]);
  const [notUnderstandAnswers, setNotUnderstandAnswers] = useState([]);
  const [goodAnswers, setGoodAnswers] = useState([]);
  const [veryGoodAnswers, setVeryGoodAnswers] = useState([]);
  const navigate = useNavigate();

  const toggleLogoutUser = () => {
    logoutUser();
    navigate("/");
  };
  const toggleAnswer = (button, name, technology) => {
    const newAnswers = answers.filter((answer) => answer.name !== name);
    setAnswers(newAnswers);
    return setAnswers((prevValue) => [
      ...prevValue,
      { button, name, technology },
    ]);
  };
  const getTechnologies = () => {
    const technologies = Array.from(
      new Set(answers.map((answer) => answer.technology))
    );
    return technologies.map((technology) =>
      answers.filter((answer) => answer.technology === technology)
    );
  };
  const getAnswersPerResult = (answers) =>
    answers.map((answer) => <p key={answer.name}>{answer.name}</p>);
  useEffect(() => {
    setBadAnswers(answers.filter((answer) => answer.button === "Bad"));
    setNotUnderstandAnswers(
      answers.filter((answer) => answer.button === "Not understand")
    );
    setGoodAnswers(answers.filter((answer) => answer.button === "Good"));
    setVeryGoodAnswers(
      answers.filter((answer) => answer.button === "Very good")
    );
  }, [answers]);
  useEffect(() => {
    return auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <div className={s.app}>
      <div className={s.navBar}>
        <div className={s.navBarLogo} onClick={() => navigate("/")}>
          <img src={logo} height="100%" />
          <h1>Interview Helper</h1>
        </div>

        {currentUser && (
          <button onClick={() => toggleLogoutUser()}>Logout</button>
        )}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <HomeView
              setIsRegistered={setIsRegistered}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="login"
          element={<RegisterOrLoginView isRegistered={isRegistered} />}
        />
        <Route
          path="panel"
          element={
            <RecruiterPanelView
              candidates={candidates}
              setCandidates={setCandidates}
            />
          }
        />
        <Route
          path="panel/user/:candidateId"
          element={
            <CandidateInfo
              candidates={candidates}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          }
        />
        <Route
          path="panel/user/:candidateId/summary"
          element={
            <CandidateSummary
              selectedQuestions={selectedQuestions}
              toggleAnswer={toggleAnswer}
            />
          }
        />
        <Route
          path="panel/user/:candidateId/summary/finish"
          element={
            <CandidateFinish
              selectedQuestions={selectedQuestions}
              answers={answers}
              badAnswers={badAnswers}
              notUnderstandAnswers={notUnderstandAnswers}
              goodAnswers={goodAnswers}
              veryGoodAnswers={veryGoodAnswers}
              getAnswersPerResult={getAnswersPerResult}
              getTechnologies={getTechnologies}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
