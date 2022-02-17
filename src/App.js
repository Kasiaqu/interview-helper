import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RecruiterPanelView } from "./views/RecruiterPanelView";
import { auth, logoutUser } from "./utils/db";
import { Navbar } from "./components/Navbar";
import s from "./App.module.css";
function App() {
  const [isRegistered, setIsRegistered] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged(setCurrentUser);
  }, []);
  console.log(currentUser);

  return (
    <div className={s.app}>
      <BrowserRouter>
        {/* <Navbar setIsRegistered={setIsRegistered} currentUser={currentUser} /> */}
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
            element={
              <LoginView
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
                currentUser={currentUser}
              />
            }
          />
          <Route path="panel" element={<RecruiterPanelView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
