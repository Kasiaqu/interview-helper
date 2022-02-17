import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./views/HomeView/HomeView";
import { RegisterOrLoginView } from "./views/RegisterOrLoginView/RegisterOrLoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView/RecruiterPanelView";
import { auth, logoutUser } from "./utils/db";
import s from "./App.module.css";
function App() {
  const [isRegistered, setIsRegistered] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
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
          <Route path="panel" element={<RecruiterPanelView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
