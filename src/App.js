import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./views/HomeView/HomeView";
import { RegisterOrLoginView } from "./views/RegisterOrLoginView/RegisterOrLoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView/RecruiterPanelView";
import { auth, logoutUser } from "./utils/db";
import s from "./App.module.css";
import { CandidateInfo } from "./components/CandidateInfo/CandidateInfo";
function App() {
  const [isRegistered, setIsRegistered] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    return auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <div className={s.app}>
      <BrowserRouter>
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
            element={<CandidateInfo candidates={candidates} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
